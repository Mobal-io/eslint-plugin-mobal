const restrictedDirectives = [
    '@vue-ignore',
    '@vue-skip',
    '@vue-expect-error',
]

// @ts-check
/** @type {import('eslint').Rule.RuleModule} */
export default {
    meta: {
        type: 'problem',
        docs: {
            description: 'No typescript template error should be ignored.',
        },
        messages: {
            refactorTask: 'Resolve the error and remove the tag.',
        },
    },
    create(context) {
        return {
            Program(node) {
                if (!node.templateBody) {
                    return
                }

                for (const comment of node.templateBody.comments) {
                    if (comment.type !== 'HTMLComment') {
                        continue
                    }

                    for (const directive of restrictedDirectives) {
                        if (comment.value.includes(directive)) {
                            context.report({
                                loc: comment.loc,
                                message: `Line contains ${directive}, ignoring potential type errors`,
                            })
                        }
                    }
                }
            },
        }
    },
}
