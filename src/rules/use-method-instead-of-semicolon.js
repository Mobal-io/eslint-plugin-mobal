import utils from 'eslint-plugin-vue/lib/utils/index.js'
import { parse } from 'vue-eslint-parser'

export default {
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow the use of semicolon in event bindings',
        },
    },

    create(context) {
        const sourceCode = context.getSourceCode()
        return utils.defineTemplateBodyVisitor(context, {
            'VAttribute': (node) => {
                if (node.key.name.rawName?.startsWith('@')) {
                    const line = node.loc.start.line
                    const lineText = sourceCode.lines[line - 1].trim()
                    if (lineText.includes(';')) {
                        context.report({
                            node,
                            message: 'Do not use semicolon in event bindings. Introduce a method.',
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
