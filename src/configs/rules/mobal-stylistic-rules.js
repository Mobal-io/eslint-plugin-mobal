export default {
    // deprecated rules, stylistic style overrides
    '@stylistic/indent': ['error', 4, { 'SwitchCase': 1 }],
    '@stylistic/space-before-function-paren': 'off',
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/semi': ['error', 'never'],
    '@stylistic/max-len': 'off',
    '@stylistic/no-mixed-operators': 'error',
    '@stylistic/quote-props': ['error', 'consistent'],
    '@stylistic/multiline-ternary': ['warn', 'always-multiline'],
    '@stylistic/member-delimiter-style': ['error', {
        multiline: {
            delimiter: 'none',
            requireLast: true,
        },
        singleline: {
            delimiter: 'comma',
            requireLast: false,
        },
    }],
    '@stylistic/object-curly-newline': ['error', {
        'multiline': true,
        'consistent': true,
        'minProperties': 2,
    }],
    '@stylistic/object-property-newline': [
        'error',
        {
            'allowAllPropertiesOnSameLine': false,
        },
    ],
    '@stylistic/brace-style': [
        'error',
        '1tbs',
        { 'allowSingleLine': false },
    ],
}