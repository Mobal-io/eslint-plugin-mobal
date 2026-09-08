import { RuleTester } from 'eslint'
import newlineDestructuringRule from '../newline-destructuring.js'

const ruleTester = new RuleTester()

// the options this plugin actually ships in mobal-base-flavour-rules.js
const mobalOptions = [
    {
        items: 1,
        consistent: true,
    },
]

ruleTester.run('newline-destructuring', newlineDestructuringRule, {
    valid: [
        {
            // a single property is always left alone
            code: 'const { a } = x',
            options: mobalOptions,
        },
        {
            code: 'const {\na,\nb,\n} = x',
            options: mobalOptions,
        },
        {
            // two properties are within the default `items` limit of 2
            code: 'const { a, b } = x',
        },
        {
            code: 'const { a } = x',
        },
    ],
    invalid: [
        {
            // more properties than `items` allows, all on one line
            code: 'const { a, b } = x',
            output: 'const {\na,\nb\n} = x',
            options: mobalOptions,
            errors: [{ messageId: 'mustSplit' }],
        },
        {
            // a rest element lowers the limit to `itemsWithRest` (default 1)
            code: 'const { a, ...rest } = x',
            output: 'const {\na,\n...rest\n} = x',
            errors: [{ messageId: 'mustSplit' }],
        },
        {
            // blank lines between properties are never allowed
            code: 'const {\na,\n\nb,\n} = x',
            output: 'const {\na,\nb\n} = x',
            options: mobalOptions,
            errors: [{ messageId: 'noBlankBetween' }],
        },
        {
            // `consistent` forbids mixing one-per-line with shared lines
            code: 'const {\na, b,\nc,\n} = x',
            output: 'const {\na,\nb,\nc\n} = x',
            options: mobalOptions,
            errors: [{ messageId: 'consistNewline' }],
        },
        {
            // without `consistent`, a split that is under the limit is collapsed
            code: 'const {\na,\nb\n} = x',
            output: 'const {a,b} = x',
            errors: [{ messageId: 'mustNotSplit' }],
        },
        {
            // defaults keep the shorthand/aliased/default-value forms intact
            code: 'const { a, b: c, d = 1 } = x',
            output: 'const {\na,\nb: c,\nd = 1\n} = x',
            errors: [{ messageId: 'mustSplit' }],
        },
    ],
})
