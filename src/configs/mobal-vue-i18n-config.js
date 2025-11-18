import vueI18n from '@intlify/eslint-plugin-vue-i18n'
import rules from './rules/mobal-vue-i18n-rules.js'

const config = {
    plugins: {
        'vue-i18n': vueI18n,
    },
    rules,
}

const configs = [
    ...vueI18n.configs.recommended,
    config,
]

export default configs