import globals from 'globals'
import { defineConfigWithVueTs } from '@vue/eslint-config-typescript'
import stylistic from '@stylistic/eslint-plugin'
import newlineDestructuring from 'eslint-plugin-newline-destructuring'
import importNewlines from 'eslint-plugin-import-newlines'
import importPlugin from 'eslint-plugin-import'

import baseJsRules from './rules/mobal-basic-js-rules.js'
import flavorRules from './rules/mobal-flavor-rules.js'

const config = defineConfigWithVueTs({
    extends: [],
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
        ...flavorRules,
    },
})[0]

export default config
