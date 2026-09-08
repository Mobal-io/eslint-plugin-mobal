// Ported from eslint-plugin-newline-destructuring v1.2.2 by Uriel Van
// https://github.com/urielvan/eslint-plugin-newline-destructuring
//
// The upstream package declares the MIT license in its package.json (the repo
// itself ships no LICENSE file). It was vendored here because it calls
// `context.getSourceCode()`, which ESLint 10 removed, and upstream has been
// dormant since April 2024.
//
// Behaviour is kept identical to v1.2.2, with three deliberate changes:
// the removed ESLint APIs are replaced with `context.sourceCode`, the
// "desctructuring" typo in the messages is fixed, and the `node.loc` guard
// runs before `loc` is read instead of after.

const MAX_COUNT = 2
const MAX_REST_COUNT = 1
const MAX_LENGTH = Infinity
const CONSISTENT = false
const ALLOW_ALL_PROPERTIES_ON_SAME_LINE = false

const MUST_SPLIT = 'mustSplit'
const MUST_NOT_SPLIT = 'mustNotSplit'
const MUST_SPLIT_TOO_LONG = 'mustSplitTooLong'
const NO_BLANK_BETWEEN = 'noBlankBetween'
const CONSIST_NEWLINE = 'consistNewline'
const MULTILINE_PROPERTY = 'multilineProperty'

function isRestElement(item) {
    // ExperimentalRestProperty is there for babel-eslint compatibility
    return item.type === 'RestElement' || item.type === 'ExperimentalRestProperty'
}

function isSameLine(first, last) {
    return first.loc.end.line === last.loc.start.line
}

function getPropertyString(source, item, multiLine, isLast = false) {
    const originalText = source.getText(item)

    if (isRestElement(item)) {
        if (item.argument.type === 'Identifier') {
            return `...${item.argument.name}`
        }

        return originalText
    }

    const { value, key } = item
    let endString = ','

    if (isLast) {
        endString = ''
    } else if (multiLine) {
        endString += '\n'
    }

    const hasUnsupportedKey = key.type !== 'Identifier' && key.type !== 'Literal'
    const hasUnsupportedValue = value.type !== 'Identifier'
        && value.type !== 'AssignmentPattern'
        && value.type !== 'ObjectPattern'

    if (hasUnsupportedKey || hasUnsupportedValue) {
        return originalText
    }

    let valueString = ''

    if (key.type === 'Identifier') {
        valueString = key.name
    } else {
        valueString = key.raw ?? ''
    }

    if (value.type === 'Identifier') {
        if (item.shorthand) {
            return valueString + endString
        }

        return `${valueString}: ${value.name}${endString}`
    }

    if (value.type === 'ObjectPattern') {
        return `${valueString}: ${source.getText(value)}${endString}`
    }

    if (value.left.type !== 'Identifier' && value.left.type !== 'ObjectPattern') {
        return originalText
    }

    if (value.left.type === 'ObjectPattern') {
        valueString += `: ${source.getText(value.left)}`
    } else if (!item.shorthand) {
        valueString += `: ${value.left.name}`
    }

    valueString += ' = '

    if (value.right.type === 'Identifier') {
        valueString += value.right.name
    } else if (value.right.type === 'Literal') {
        valueString += value.right.raw ?? ''
    } else {
        valueString += source.getText(value.right)
    }

    return valueString + endString
}

function getFixer(source, node, multiLine = true) {
    return (fixer) => {
        const { properties } = node
        const lastIndex = properties.length - 1
        const newValues = properties.map(
            (item, index) => getPropertyString(source, item, multiLine, index === lastIndex),
        )
        let newString = newValues.join('')

        if (multiLine) {
            newString = `\n${newString}\n`
        }

        newString = `{${newString}}`

        const { typeAnnotation } = node

        if (typeAnnotation) {
            newString += source.getText(typeAnnotation)
        }

        return fixer.replaceText(node, newString)
    }
}

function getCommentLines(source, node) {
    const commentLines = []

    source.getCommentsInside(node).forEach((comment) => {
        if (comment.loc) {
            for (let line = comment.loc.start.line; line <= comment.loc.end.line; line++) {
                commentLines.push(line)
            }
        }
    })

    return commentLines
}

// @ts-check
/** @type {import('eslint').Rule.RuleModule} */
export default {
    meta: {
        type: 'layout',
        docs: {
            description: 'Enforce newlines between object destructuring properties',
        },
        fixable: 'whitespace',
        schema: {
            type: 'array',
            minItems: 0,
            maxItems: 1,
            items: {
                type: 'object',
                properties: {
                    items: {
                        type: 'number',
                        minimum: 1,
                    },
                    itemsWithRest: {
                        type: 'number',
                        minimum: 1,
                    },
                    maxLength: {
                        type: 'number',
                        minimum: 4, // `{}=x`, where x stands for a variable
                    },
                    consistent: {
                        type: 'boolean',
                    },
                    allowAllPropertiesOnSameLine: {
                        type: 'boolean',
                    },
                },
            },
        },
        messages: {
            [MUST_SPLIT]: `Object destructuring lines must be broken into multiple lines if there are more than {{${MUST_SPLIT}}} properties`,
            [MUST_SPLIT_TOO_LONG]: `Object destructuring lines must be broken into multiple lines if the line is longer than {{${MUST_SPLIT_TOO_LONG}}}`,
            [MUST_NOT_SPLIT]: `Object destructuring lines must not be broken into multiple lines if there are {{${MUST_NOT_SPLIT}}} or less elements.`,
            [NO_BLANK_BETWEEN]: 'Object destructuring lines cannot have blank line between them.',
            [CONSIST_NEWLINE]: 'Object destructuring lines must be put on newlines',
            [MULTILINE_PROPERTY]: 'Object destructuring lines have multiline property must be put on newlines',
        },
    },
    create(context) {
        const source = context.sourceCode
        const {
            items = MAX_COUNT,
            itemsWithRest = MAX_REST_COUNT,
            maxLength = MAX_LENGTH,
            consistent = CONSISTENT,
            allowAllPropertiesOnSameLine = ALLOW_ALL_PROPERTIES_ON_SAME_LINE,
        } = context.options[0] ?? {}

        return {
            ObjectPattern(node) {
                const { properties } = node

                if (properties.length <= 1 || !node.loc) {
                    return
                }

                let hasRest = false
                let multiLine = false
                let inSameLine = false
                let hasBlankBetween = false
                let hasMultilineProperty = false
                const commentLines = getCommentLines(source, node)
                const openBrace = source.getFirstToken(node, (token) => token.value === '{')
                const closeBrace = source.getLastToken(node, (token) => token.value === '}')

                for (let i = 0; i < properties.length - 1; i++) {
                    hasRest ||= properties[i].type === 'RestElement'
                    const currentLoc = properties[i].loc
                    const nextLoc = properties[i + 1].loc

                    if (!currentLoc || !nextLoc) {
                        continue
                    }

                    if (currentLoc.end.line !== currentLoc.start.line) {
                        hasMultilineProperty = true
                    }

                    if (nextLoc.start.line !== currentLoc.end.line) {
                        multiLine = true
                    } else {
                        inSameLine = true
                    }

                    if (currentLoc.end.line + 1 < nextLoc.start.line) {
                        if (!hasBlankBetween) {
                            for (let line = currentLoc.end.line + 1; line < nextLoc.start.line; line++) {
                                if (!commentLines.includes(line)) {
                                    hasBlankBetween = true

                                    break
                                }
                            }
                        }

                        continue
                    }

                    if (i === properties.length - 2) {
                        hasRest ||= properties[i + 1].type === 'RestElement'
                        hasMultilineProperty ||= nextLoc.end.line !== nextLoc.start.line
                    }
                }

                let maxCount = items

                if (hasRest) {
                    maxCount = itemsWithRest
                }

                const start = node.loc.start.line
                const end = node.loc.end.line
                const lines = source.getLines().slice(start - 1, end)
                const textLength = lines.map((line) => line.trim()).join('').length

                // the line breaks themselves are not part of `lines`
                const isLongText = (textLength + end - start) > maxLength
                const hasManyItems = properties.length > maxCount

                // a multiline property carries the greatest weight
                if (hasMultilineProperty && !multiLine) {
                    context.report({
                        node,
                        messageId: MULTILINE_PROPERTY,
                    })

                    return
                }

                // conditions that require wrapping the text
                if (hasManyItems || isLongText) {
                    if (!multiLine) {
                        let messageId = MUST_SPLIT_TOO_LONG
                        let data = { [MUST_SPLIT_TOO_LONG]: maxLength.toString() }

                        if (hasManyItems) {
                            messageId = MUST_SPLIT
                            data = { [MUST_SPLIT]: maxCount.toString() }
                        }

                        context.report({
                            node,
                            messageId,
                            data,
                            fix: getFixer(source, node),
                        })

                        return
                    }

                    if (inSameLine) {
                        context.report({
                            node,
                            messageId: CONSIST_NEWLINE,
                            fix: getFixer(source, node),
                        })
                    }

                    if (hasBlankBetween) {
                        context.report({
                            node,
                            messageId: NO_BLANK_BETWEEN,
                            fix: getFixer(source, node),
                        })
                    }

                    return
                }

                if (
                    consistent
                    && inSameLine
                    && !isSameLine(openBrace, closeBrace)
                    && !allowAllPropertiesOnSameLine
                ) {
                    context.report({
                        node,
                        messageId: CONSIST_NEWLINE,
                        fix: getFixer(source, node, false),
                    })

                    return
                }

                if (!consistent && multiLine && !hasMultilineProperty) {
                    if (!allowAllPropertiesOnSameLine) {
                        context.report({
                            node,
                            messageId: MUST_NOT_SPLIT,
                            data: {
                                [MUST_NOT_SPLIT]: maxCount.toString(),
                            },
                            fix: getFixer(source, node, false),
                        })
                    } else if (
                        inSameLine
                        || isSameLine(openBrace, source.getTokenAfter(openBrace))
                        || isSameLine(source.getTokenBefore(closeBrace), closeBrace)
                    ) {
                        context.report({
                            node,
                            messageId: CONSIST_NEWLINE,
                            fix: getFixer(source, node),
                        })
                    }
                }
            },
        }
    },
}
