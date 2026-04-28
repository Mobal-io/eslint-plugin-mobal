import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'
import newlineDestructuring from 'eslint-plugin-newline-destructuring'
import importNewlines from 'eslint-plugin-import-newlines'
import importPlugin from 'eslint-plugin-import'

import baseJsRules from './rules/mobal-basic-js-rules.js'
import flavorJsRules from './rules/mobal-flavor-js-rules.js'

const config = {
    plugins: {
        'import-newlines': importNewlines,
        'import': importPlugin,
        'newline-destructuring': newlineDestructuring,
        '@stylistic': stylistic,
    },
    languageOptions: {
        globals: {
            ...globals.browser,
        },
    },
    rules: {
        ...baseJsRules,
        ...flavorJsRules,
    },
}

export default config
