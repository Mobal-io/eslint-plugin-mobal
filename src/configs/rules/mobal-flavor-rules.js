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
            'allowMultiplePropertiesPerLine': false,
        },
    ],
    '@stylistic/brace-style': [
        'error',
        '1tbs',
        { 'allowSingleLine': false },
    ],
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
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/ban-ts-comment': [
        'error',
        {
            'ts-ignore': 'allow-with-description',
            'minimumDescriptionLength': 10,
        },
    ],
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-unused-vars': ['error', {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
    }],
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],
    '@typescript-eslint/no-duplicate-enum-values': 'warn',
    'vue/require-default-prop': 'off',
    'vue/html-indent': ['error', 4, {
        'attribute': 1,
        'baseIndent': 1,
        'closeBracket': 0,
        'alignAttributesVertically': true,
        'ignores': [],
    }],
    'vue/valid-v-slot': ['error', {
        'allowModifiers': true,
    }],
    'vue/prefer-template': 'error',
}
