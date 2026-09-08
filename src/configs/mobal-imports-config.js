import importPlugin from 'eslint-plugin-import-x'
import rules from './rules/mobal-import-rules.js'

// import-x is registered under the `import` key so every rule id stays
// `import/*`. Its settings, however, are always read from the `import-x/`
// prefix regardless of the key the plugin is registered under.
const config = {
    plugins: {
        import: importPlugin,
    },
    rules,
    settings: {
        'import-x/extensions': [
            '.js',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.mts',
        ],
        'import-x/core-modules': [],
        'import-x/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$',
        ],
    },
}

export default config
