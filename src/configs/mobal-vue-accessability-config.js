import vueAccessibility from 'eslint-plugin-vuejs-accessibility'
import rules from './rules/mobal-vue-accessability-rules.js'

const config = {
    plugins: {
        'vuejs-accessibility': vueAccessibility,
    },
    rules,
}

export default config
