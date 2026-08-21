// @ts-check

/**
 * eslint 10 removed a batch of long-deprecated APIs:
 *
 *  - `context.getSourceCode()` / `context.getFilename()` and friends
 *  - `sourceCode.getTokenOrCommentBefore()` / `getTokenOrCommentAfter()`
 *
 * Some of the third-party plugins we bundle have no eslint 10 compatible
 * release we can move to yet and still call them, so their rules throw as soon
 * as a consumer runs eslint 10. Wrapping such a plugin with
 * `withEslint10Compat` puts the removed APIs back, which keeps its rules
 * working on eslint 9 and eslint 10 alike.
 *
 * On eslint 9 every API is still there, so all of this is a no-op.
 */

/** @type {Record<string, (context: any) => unknown>} */
const removedContextAccessors = {
    getSourceCode: (context) => context.sourceCode,
    getFilename: (context) => context.filename,
    getPhysicalFilename: (context) => context.physicalFilename,
    getCwd: (context) => context.cwd,
}

/**
 * Same implementations eslint itself shipped before dropping them, see
 * eslint 9's lib/languages/js/source-code/token-store/index.js.
 */
const removedSourceCodeMethods = {
    /** @this {any} */
    getTokenOrCommentBefore(node, skip) {
        return this.getTokenBefore(node, {
            includeComments: true,
            skip,
        })
    },
    /** @this {any} */
    getTokenOrCommentAfter(node, skip) {
        return this.getTokenAfter(node, {
            includeComments: true,
            skip,
        })
    },
}

const patchedSourceCodePrototypes = new WeakSet()

/**
 * A `SourceCode` instance is frozen, so the removed methods have to go back on
 * its prototype. We take the prototype off the live instance rather than
 * importing `eslint` ourselves, so we always patch the exact eslint the
 * consumer is running instead of a copy nested in our own dependencies.
 *
 * @param {any} sourceCode the source code object for the file being linted
 * @returns {void}
 */
function restoreRemovedSourceCodeMethods(sourceCode) {
    if (!sourceCode) {
        return
    }

    const prototype = Object.getPrototypeOf(sourceCode)
    if (!prototype || patchedSourceCodePrototypes.has(prototype)) {
        return
    }

    patchedSourceCodePrototypes.add(prototype)

    for (const [name, method] of Object.entries(removedSourceCodeMethods)) {
        if (typeof sourceCode[name] === 'function') {
            continue
        }

        Object.defineProperty(prototype, name, {
            value: method,
            writable: true,
            configurable: true,
            enumerable: false,
        })
    }
}

/**
 * @param {any} context the rule context handed to us by eslint
 * @returns {any} the same context, with any removed accessor put back
 */
function withRestoredContext(context) {
    restoreRemovedSourceCodeMethods(context.sourceCode)

    /** @type {Record<string, () => unknown>} */
    const restored = {}
    let hasRestored = false

    for (const [name, read] of Object.entries(removedContextAccessors)) {
        if (typeof context[name] === 'function') {
            continue
        }

        restored[name] = () => read(context)
        hasRestored = true
    }

    if (!hasRestored) {
        return context
    }

    // Same shape eslint uses to derive a rule context from a file context:
    // own properties layered on top of the original as the prototype.
    return Object.freeze(Object.assign(Object.create(context), restored))
}

/**
 * @param {any} rule an eslint rule module
 * @returns {any} the rule, with `create` receiving a back-filled context
 */
function withRestoredRule(rule) {
    if (typeof rule?.create !== 'function') {
        return rule
    }

    return {
        ...rule,
        create(context) {
            return rule.create(withRestoredContext(context))
        },
    }
}

/**
 * @param {any} plugin an eslint plugin exposing a `rules` map
 * @returns {any} a copy of the plugin whose rules also run on eslint 10
 */
export default function withEslint10Compat(plugin) {
    if (!plugin?.rules) {
        return plugin
    }

    /** @type {Record<string, any>} */
    const rules = {}

    for (const [name, rule] of Object.entries(plugin.rules)) {
        rules[name] = withRestoredRule(rule)
    }

    return {
        ...plugin,
        rules,
    }
}
