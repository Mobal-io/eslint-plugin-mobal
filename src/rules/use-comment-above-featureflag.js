import utils from 'eslint-plugin-vue/lib/utils/index.js'

// @ts-check
/** @type {import('eslint').Rule.RuleModule} */
export default {
    meta: {
        type: 'problem',
        docs: {
            description: 'Requires devs to add a Linear task with a TODO and refactor task',
        },
        messages: {
            refactorTask: 'Add a comment <!-- TODO: Refactor M-XXX --> above feature flag',
        },
    },
    create(context) {
        return utils.defineTemplateBodyVisitor(context, {
            VElement(node) {
                if (node.name === 'posthogfeatureflag') {
                    const lineAbove = context.sourceCode.getLines()[node.loc.start.line - 2]
                    if (!lineAbove.match(/\s*TODO:.+M-(\d+).+/)) {
                        context.report({
                            node,
                            message: 'Feature flag must contain a comment above with TODO: Refactor M-XXX',
                        })
                    }
                }
            },
        })
    },
}
