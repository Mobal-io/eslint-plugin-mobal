export default {
    'mobal/use-consistent-test-naming': 'error',
    'mobal/use-comment-above-featureflag': 'error',
    'mobal/use-computed-instead-of-inline-if': ['error', { 'allowedComplexity': 0 }],
    'mobal/use-method-instead-of-semicolon': 'error',
    'mobal/use-no-root-events': 'warn',
    'mobal/use-no-track-events': 'error',
    'mobal/no-vue-ignore': 'warn',
    // deprecated rules, stylistic override them
    'indent': 'off',
    'space-before-function-paren': 'off',
    'space-before': 'off',
    'quotes': 'off',
    'comma-dangle': 'off',
    'semi': 'off',
    'max-len': 'off',
    'quote-props': 'off',
    'multiline-ternary': 'off',
    'object-property-newline': 'off',
    'brace-style': 'off',
    'curly': ['error', 'all'],
    'newline-destructuring/newline': [
        'error',
        {
            'items': 1,
            'consistent': true,
        },
    ],
    'import-newlines/enforce': [
        'error',
        {
            'items': 1,
            'consistent': true,
        },
    ],
    'prefer-destructuring': 'off',
    'arrow-body-style': 'off',
    'radix': ['error', 'as-needed'],
    'no-param-reassign': 'off',
    'camelcase': ['error', { 'properties': 'always' }],
    'no-restricted-syntax': [
        'error',
        'ForInStatement',
        'LabeledStatement',
        'WithStatement',
    ],
    'no-console': [
        (
            process.env.NODE_ENV === 'production'
                ? 'error'
                : 'off'
        ),
        { 'allow': ['info', 'error', 'debug', 'warn'] },
    ],
    // we don't use a lot of classes, but if we use exceptions, for example,
    // then it doesn't make sense to split them
    'max-classes-per-file': 'off',
    'no-debugger': (process.env.NODE_ENV === 'production' ? 'error' : 'off'),
    // Gives incorrect errors for types with next rule
    'no-shadow': 'off',
}