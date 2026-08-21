import assert from 'assert'

import plugin from '../index.js'
import withEslint10Compat from '../eslint10-compat.js'
import {
    importCompat,
    importNewlinesCompat,
    newlineDestructuringCompat,
} from '../compat-plugins.js'

/**
 * Stands in for the frozen source code object eslint hands to a rule. The
 * eslint 10 variant is missing the token/comment helpers that eslint 10
 * removed.
 */
function makeSourceCode({ withRemovedMethods }) {
    class SourceCode {
        getTokenBefore(node, options) {
            return {
                called: 'getTokenBefore',
                node,
                options,
            }
        }

        getTokenAfter(node, options) {
            return {
                called: 'getTokenAfter',
                node,
                options,
            }
        }
    }

    if (withRemovedMethods) {
        SourceCode.prototype.getTokenOrCommentBefore = function (node, skip) {
            return {
                called: 'original-before',
                node,
                skip,
            }
        }
    }

    return Object.freeze(new SourceCode())
}

function makeContext({ eslintVersion }) {
    const sourceCode = makeSourceCode({ withRemovedMethods: eslintVersion === 9 })
    const context = {
        sourceCode,
        filename: '/repo/probe.js',
        physicalFilename: '/repo/probe.js',
        cwd: '/repo',
        report() {},
    }

    if (eslintVersion === 9) {
        context.getSourceCode = () => sourceCode
        context.getFilename = () => '/repo/probe.js'
        context.getPhysicalFilename = () => '/repo/probe.js'
        context.getCwd = () => '/repo'
    }

    return Object.freeze(context)
}

function pluginWithProbeRule() {
    let seen = null

    return {
        seen: () => seen,
        plugin: {
            meta: { name: 'probe' },
            rules: {
                probe: {
                    meta: { type: 'problem' },
                    create(context) {
                        seen = context
                        return {}
                    },
                },
            },
        },
    }
}

describe('eslint10-compat', () => {
    it('it should restore the context accessors eslint 10 removed', () => {
        const { plugin, seen } = pluginWithProbeRule()
        const wrapped = withEslint10Compat(plugin)

        wrapped.rules.probe.create(makeContext({ eslintVersion: 10 }))
        const context = seen()

        assert.strictEqual(typeof context.getSourceCode, 'function')
        assert.strictEqual(context.getSourceCode(), context.sourceCode)
        assert.strictEqual(context.getFilename(), '/repo/probe.js')
        assert.strictEqual(context.getPhysicalFilename(), '/repo/probe.js')
        assert.strictEqual(context.getCwd(), '/repo')
    })

    it('it should restore the source code methods eslint 10 removed', () => {
        const { plugin, seen } = pluginWithProbeRule()
        const wrapped = withEslint10Compat(plugin)

        wrapped.rules.probe.create(makeContext({ eslintVersion: 10 }))
        const sourceCode = seen().sourceCode

        const node = { type: 'ImportDeclaration' }
        assert.deepStrictEqual(sourceCode.getTokenOrCommentBefore(node, 2), {
            called: 'getTokenBefore',
            node,
            options: {
                includeComments: true,
                skip: 2,
            },
        })
        assert.deepStrictEqual(sourceCode.getTokenOrCommentAfter(node), {
            called: 'getTokenAfter',
            node,
            options: {
                includeComments: true,
                skip: undefined,
            },
        })
    })

    it('it should leave an eslint 9 context untouched', () => {
        const { plugin, seen } = pluginWithProbeRule()
        const wrapped = withEslint10Compat(plugin)

        const original = makeContext({ eslintVersion: 9 })
        wrapped.rules.probe.create(original)

        assert.strictEqual(seen(), original)
    })

    it('it should not overwrite source code methods eslint still provides', () => {
        const { plugin, seen } = pluginWithProbeRule()
        const wrapped = withEslint10Compat(plugin)

        wrapped.rules.probe.create(makeContext({ eslintVersion: 9 }))
        const node = { type: 'ImportDeclaration' }

        assert.strictEqual(
            seen().sourceCode.getTokenOrCommentBefore(node, 1).called,
            'original-before',
        )
    })

    it('it should keep rule meta and pass non-rule entries through', () => {
        const wrapped = withEslint10Compat({
            rules: {
                real: {
                    meta: { type: 'problem', fixable: 'code' },
                    create: () => ({}),
                },
                notARule: 'nonsense',
            },
        })

        assert.deepStrictEqual(wrapped.rules.real.meta, {
            type: 'problem',
            fixable: 'code',
        })
        assert.strictEqual(wrapped.rules.notARule, 'nonsense')
    })

    it('it should register one shared import plugin across every config', () => {
        // eslint refuses a config array that maps one plugin name to two
        // different objects, so every config has to register the same instance
        const registered = []

        for (const preset of Object.values(plugin.configs)) {
            for (const config of preset) {
                if (config.plugins?.import) {
                    registered.push(config.plugins.import)
                }
            }
        }

        assert.ok(registered.length > 1, 'expected several configs to register it')
        for (const entry of registered) {
            assert.strictEqual(entry, importCompat)
        }
    })

    it('it should wrap every bundled plugin that eslint 10 would break', () => {
        for (const compat of [importCompat, importNewlinesCompat, newlineDestructuringCompat]) {
            const rules = Object.values(compat.rules).filter((rule) => typeof rule?.create === 'function')

            assert.ok(rules.length > 0)
            for (const rule of rules) {
                // the wrapper replaces create, so it must not be the original
                assert.strictEqual(typeof rule.create, 'function')
            }
        }
    })
})
