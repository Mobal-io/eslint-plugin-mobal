import { defineConfigWithVueTs } from '@vue/eslint-config-typescript'

import javascriptConfig from './mobal-javascript-config.js'
import vueRules from './rules/mobal-vue-rules.js'

const config = defineConfigWithVueTs({
    ...javascriptConfig,
    rules: {
        ...javascriptConfig.rules,
        ...vueRules,
    },
})[0]

export default config
