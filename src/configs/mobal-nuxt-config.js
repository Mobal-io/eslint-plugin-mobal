import rules from '../rules/index.js'

const plugin = {
    rules,
}

// Minimal Nuxt config that only includes custom mobal rules
// This avoids plugin conflicts by only registering the mobal plugin itself
const config = {
    plugins: {
        mobal: plugin,
    },
    rules: {
        'mobal/use-comment-above-featureflag': 'error',
        'mobal/use-computed-instead-of-inline-if': ['error', { 'allowedComplexity': 0 }],
        'mobal/use-method-instead-of-semicolon': 'error',
        'mobal/use-consistent-test-naming': 'error',
    },
}

// These configs are designed to be passed to Nuxt's withNuxt() function.
// Since withNuxt() prepends Nuxt's base configs, these configs come AFTER
// Nuxt's configs in the final array, ensuring mobal rules take precedence
// over Nuxt's rules (later configs override earlier ones in ESLint flat config).
const configs = [
    config,
]

export default configs


