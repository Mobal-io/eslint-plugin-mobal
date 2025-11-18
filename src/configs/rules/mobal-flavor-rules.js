import mobalBaseFlavourRules from './mobal-base-flavour-rules.js'
import mobalStylisticRules from './mobal-stylistic-rules.js'
import vueRules from './mobal-vue-rules.js'

export default {
    ...mobalBaseFlavourRules,
    ...mobalStylisticRules,
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/ban-ts-comment': [
        'error',
        {
            'ts-ignore': 'allow-with-description',
            'minimumDescriptionLength': 10,
        },
    ],
    '@typescript-eslint/no-unnecessary-condition': 'error',
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
    ...vueRules,
}
