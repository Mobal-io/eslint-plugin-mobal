import fs from 'fs'
import path from 'path'

import './dirname-polyfill.js'
import rules from './rules/index.js'
import baseConfigRaw from './configs/mobal-base-config.js'
import importsConfig from './configs/mobal-imports-config.js'
import vueAccessabilityConfig from './configs/mobal-vue-accessability-config.js'
import jestConfigs from './configs/mobal-jest-config.js'
import storybookConfig from './configs/mobal-storybook-config.js'
import vueI18nConfigs from './configs/mobal-vue-i18n-config.js'
import nuxtConfigs from './configs/mobal-nuxt-config.js'

const packageJsonPath = path.resolve(__dirname, '../package.json')
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

const plugin = {
    meta: {
        name: pkg.name,
        version: pkg.version,
    },
    configs: {},
    rules,
}

const baseConfig = {
    ...baseConfigRaw,
    plugins: {
        ...baseConfigRaw.plugins,
        // registering mobal rules
        mobal: plugin,
    },
}

Object.assign(plugin.configs, {
    base: [baseConfig],
    imports: [importsConfig],
    accessability: [vueAccessabilityConfig],
    vue: [
        importsConfig,
        baseConfig,
        vueAccessabilityConfig,
    ],
    jest: [
        ...jestConfigs,
    ],
    storybook: [
        storybookConfig,
    ],
    vueI18n: [
        ...vueI18nConfigs,
    ],
    nuxt: [
        ...nuxtConfigs,
    ],
})

export default plugin
