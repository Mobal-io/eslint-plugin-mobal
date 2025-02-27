const corrections = [
    // Short strings need to be between word boundaries to limit false positives:
    [/\bShould\b/, 'should'],
]

function matcher(context) {
    return (node) => {
        if (
            typeof node.value !== 'string' // not a string literal -> don't care
            || !context.getFilename().match(/\.spec\.js?$/) // not a test file -> don't care
        ) {
            return
        }
        corrections.forEach(([search, replace]) => {
            const match = node.value.match(search)
            if (match) {
                if (typeof replace === 'string') {
                    context.report({
                        node,
                        message: `Replace inconsistent spelling of "${match[0]}" with "${replace}"`,
                        fix: (fixer) => {
                            return fixer.replaceTextRange(
                                [
                                    node.range[0] + match.index + 1,
                                    node.range[0] + match.index + match[0].length + 1,
                                ],
                                replace,
                            )
                        },
                    })
                }
            }
        })
    }
}

// @ts-check
/** @type {import('eslint').Rule.RuleModule} */
export default {
    meta: {
        type: 'problem',
        docs: {
            description:
        'Converts Should -> should and makes sure test starts with should',
        },
        fixable: 'code',
    },
    create: (context) => ({
        Literal: matcher(context),
        JSXText: matcher(context),
        CallExpression(node) {
            if (node.callee.name === 'it' && !node.arguments[0].value.startsWith('should')) {
                context.report({
                    node,
                    message: 'Test name must start with should',
                })
            }
        },
    }),
}
