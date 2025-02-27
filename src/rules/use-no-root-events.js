export default {
    meta: {
        type: 'problem',
        docs: {
            description: 'disallow the use of this.$root.$on, this.$root.$off, and this.$root.$once',
            category: 'Possible Errors',
        },
        fixable: 'code',
        schema: [],
    },
    create(context) {
        return {
            MemberExpression(node) {
                if (
                    node.object.type === 'MemberExpression'
                    && node.object.object.type === 'ThisExpression'
                    && node.object.property.name === '$root'
                    && (node.property.name === '$on'
                    || node.property.name === '$off'
                    || node.property.name === '$once')
                ) {
                    context.report({
                        node,
                        message: `"this.$root.${node.property.name}" should not be used because it's not supported in Vue3`,
                    })
                }
            },
        }
    },
}
