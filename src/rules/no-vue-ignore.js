import htmlComments from 'eslint-plugin-vue/lib/utils/html-comments.js'

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
        const checkContainsDirective = (comment) => {
            const { value } = comment.value
            restrictedDirectives.forEach((directive) => {
                if (value.includes(directive)) {
                    context.report({
                        loc: {
                            start: comment.value.loc.start,
                            end: comment.value.loc.end,
                        },
                        message: `Line contains ${directive}, ignoring potential type errors`,
                    })
                }
            })
        }
        return htmlComments.defineVisitor(
            context,
            context.options[1],
            checkContainsDirective,
            { includeDirectives: true },
        )
    },
}
