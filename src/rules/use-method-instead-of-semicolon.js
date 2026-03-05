export default {
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow the use of semicolon in event bindings',
        },
    },

    create(context) {
        const sourceCode = context.getSourceCode()
        const { defineTemplateBodyVisitor } = sourceCode.parserServices
        if (!defineTemplateBodyVisitor) {
            return {}
        }
        return defineTemplateBodyVisitor({
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
}
