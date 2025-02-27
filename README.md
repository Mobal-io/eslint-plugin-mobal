# eslint-plugin-mobal

A repo containing Mobal.io eslint ruleset.
Requires Eslint version >  9.x and flat config.

Doesn't includes base configs.

## Install

add the package to `package.json`
```
"eslint-plugin-mobal" : "git://github.com/Mobal-io/eslint-plugin-mobal.git#version",
```

### Config usage


```
// eslint.config.js
import eslint from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import {
    defineConfigWithVueTs,
    vueTsConfigs,
} from '@vue/eslint-config-typescript'
import mobal from 'eslint-plugin-mobal'

export default defineConfigWithVueTs(
    // base configs
    eslint.configs.recommended,
    pluginVue.configs['flat/recommended'],
    vueTsConfigs.recommended,
    storybook.configs['flat/recommended'],
    // inlcude mobal flavor
    mobal.configs.vue,
    // for import plugin, you need to say how to resolve aliases
    {
        files: ['**/*.{ts,js,vue}'],
        languageOptions: {
            globals: {
                'process': true,
            },
            parserOptions: {
                parser: '@typescript-eslint/parser',
                sourceType: 'module',
            },
        },
        settings: {
            'import/resolver': {
                // if you use webpack, add this line. otherwise no need.
                // check out eslint-import-resolver-webpack
                webpack: {
                    config: './dev.config.js',
                },
                typescript: true,
                node: true,
            },
        },
    },
);

```


provided configs:

* vue config
```
mobal.configs.vue
```
* basic js/ts config
```
mobal.configs.base
```
* basic imports style
```
mobal.configs.imports
```
* jest config
```
mobal.configs.jest
```
* storybook config
```
mobal.configs.storybook
```
* accessability (including vue) config
```
mobal.configs.accessability
```

## Testing

```
npm run test
```

## Local development

* clone the repo
```
git clone git@github.com:Mobal-io/eslint-plugin-mobal.git
cd eslint-plugin-mobal
```
* install dependencies
```
npm i
```
* create npm link
```
npm link
```
* go to repo you want to add the plugin
```
cd path/to/repo
```
* add link to the plugin
```
npm link eslint-plugin-mobal
```
* make your changes

Note: after `npm i` or `npm ci` in the repo, you need to reinstall link, so run `npm link eslint-plugin-mobal` again.

## Release

* run tests, ensure everything works
* add tag
```
git tag -a vX.X.X -m "version changes"
```
* push
* create new release on github using the tag
* update the plugin package link in your repo
