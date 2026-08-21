import globals from 'globals'
import stylistic from '@stylistic/eslint-plugin'

import {
    importCompat,
    importNewlinesCompat,
    newlineDestructuringCompat,
} from '../compat-plugins.js'
import baseJsRules from './rules/mobal-basic-js-rules.js'
import flavorJsRules from './rules/mobal-flavor-js-rules.js'

const config = {
    plugins: {
        'import-newlines': importNewlinesCompat,
        'import': importCompat,
        'newline-destructuring': newlineDestructuringCompat,
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
