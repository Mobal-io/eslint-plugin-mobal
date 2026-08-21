# eslint-plugin-mobal

A repo containing Mobal.io eslint ruleset.
Requires Eslint 9.x or 10.x and flat config.

Doesn't includes base configs.

## eslint 10

The rules and presets here run on both eslint 9 and eslint 10. eslint 10 removed
a batch of long-deprecated APIs (`context.getSourceCode()`, `context.getFilename()`,
`sourceCode.getTokenOrCommentBefore()`, ...) and some of the plugins we bundle
have no eslint 10 release yet, so `src/eslint10-compat.js` puts those APIs back
for them. Drop the wrapper for a plugin once upstream ships eslint 10 support.

Two things are on the consumer side when moving a repo to eslint 10:

* `eslint-plugin-vue` must be at least `10.8.0` — earlier versions have a peer
  range that excludes eslint 10, so a pin or override below that fails to install.
* If your `eslint.config.mjs` imports a plugin directly (e.g. `eslint-plugin-vue`),
  declare it in your own `package.json` instead of relying on it being hoisted out
  of this package.

Note that eslint 10 also changed the core `radix` rule: under `['error', 'as-needed']`
eslint 9 flags a redundant `parseInt(x, 10)` while eslint 10 flags a missing radix
instead, so expect that rule to move when you upgrade.

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

* vue config (vue + js/ts rules + parser via `defineConfigWithVueTs`)
```
mobal.configs.vue
```
* basic js/ts config (vue-coupled, kept for backwards compat with `mobal.configs.vue`)
```
mobal.configs.base
```
* vue-agnostic js/ts config (rules only — no parser/plugin; consumer wires tseslint)
```
mobal.configs.javascript
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
* vue i18n config
``` 
mobal.configs.vueI18n
```

### TS-only / Node service usage

For repos without Vue (Cloudflare Workers, plain Node services), wire tseslint
yourself and add `mobal.configs.javascript` on top:

```js
// eslint.config.mjs
import js from '@eslint/js'
import mobal from 'eslint-plugin-mobal'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    { ignores: ['node_modules/', 'dist/'] },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...mobal.configs.javascript,
    ...mobal.configs.imports,
)
```

`mobal.configs.javascript` only ships rules and helper plugins (import,
stylistic, etc.) — the consumer registers `@typescript-eslint`'s parser and
plugin via `tseslint.config()` + `tseslint.configs.recommended`. This avoids
double-plugin-registration errors when mobal's preset is composed with other
TS configs.

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
use angular version guide: major change.minor change.patch
* push
```
git push origin tag vX.X.X
```
* create new release on github using the tag
* update the plugin package link in your repo

### Updated/simplified

* run tests, ensure everything works
* update npm version
```
npm version <version> --no-commit-hooks
```
* push
```
git push origin tag vX.X.X
```
* create new release on github using the tag
* update the plugin package link in your repo
