import utils from 'eslint-plugin-vue/lib/utils/index.js'
import { parse } from 'vue-eslint-parser'

export default {
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow the use of complex v-if or v-else-if statements in Vue templates',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    allowedComplexity: {
                        type: 'number',
                    },
                },
                additionalProperties: false,
            },
        ],
        options: [
            {
                allowedComplexity: [0, 1, 2],
            },
        ],
    },

    create(context) {
        const sourceCode = context.getSourceCode()

        return utils.defineTemplateBodyVisitor(context, {
            'VAttribute[directive=true]': (node) => {
                const currentDirective = node.key.name.name
                const isIfDirective = currentDirective === 'if' || currentDirective === 'else-if'
                const isComputedProperty = node.value?.computed
                if (!isIfDirective || isComputedProperty) {
                    return
                }
                const line = node.loc.start.line
                const lineText = sourceCode.lines[line - 1].trim()
                const matchByOrAnd = /(&&|\|\|)/g
                const complexity = lineText.split(`v-${currentDirective}="`)[1].split('"')[0].match(matchByOrAnd)?.length
                if (lineText.includes(`v-${currentDirective}`)) {
                    if (complexity > context.options[0].allowedComplexity) {
                        context.report({
                            node,
                            message: `v-if with complexity ${complexity} (${currentDirective}). Introduce a computed property.`,
                        })
                    }
                }
            },
        })
    },
    parsers: {
        'vue-eslint-parser': {
            parse,
        },
    },
}
