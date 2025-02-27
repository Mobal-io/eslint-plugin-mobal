export default {
    meta: {
        type: 'problem',
        docs: {
            description: 'disallow the use of this.$posthog, this.$ga, this.$intercom(trackEvent, ...) and window.Intercom',
            category: 'Possible Errors',
        },
        fixable: 'code',
        schema: [],
    },
    create(context) {
        return {
            MemberExpression(node) {
                if (
                    node.object.type === 'ThisExpression'
                    && (
                        (node.property.name === '$posthog' && node.parent.property.name === 'capture')
                        || (node.property.name === '$ga' && node.parent.property.name === 'push')
                        || (node.property.name === '$intercom' && node.property.parent?.parent?.arguments[0].value === 'trackEvent')
                    )
                ) {
                    const property = node.property.name === 'intercom'
                        ? `this.${node.property.name}('trackEvent', ...)`
                        : `this.${node.property.name}.${node.parent.property.name}`
                    context.report({
                        node,
                        message: `"${property}" should not be used, use trackEvent`,
                        fix(fixer) {
                            const parentNode = node.parent
                            const replaceText = node.property.name === '$intercom'
                                ? `trackEvent('${node.property.parent?.parent?.arguments[0].value}')`
                                : 'trackEvent'
                            return fixer.replaceText(parentNode, replaceText)
                        },
                    })
                }

                if (
                    node.object.type === 'Identifier'
                    && node.object?.name === 'Vue'
                    && node.property.type === 'Identifier'
                    && node.property?.name === '$plantrack'
                    && node.parent.property?.name === 'track'
                ) {
                    context.report({
                        node,
                        message: '"Vue.$plantrack.track" should not be used, use trackEvent',
                        fix(fixer) {
                            return fixer.replaceText(node.parent, 'trackEvent')
                        },
                    })
                }

                if (
                    node.object.type === 'Identifier'
                    && node.object.name === 'window'
                    && node.property.type === 'Identifier'
                    && node.property.name === 'Intercom'
                ) {
                    context.report({
                        node,
                        message: 'Usage of window.Intercom is not allowed, use this.$intercom.',
                        fix(fixer) {
                            return fixer.replaceText(node, 'this.$intercom')
                        },
                    })
                }
            },
        }
    },
}
