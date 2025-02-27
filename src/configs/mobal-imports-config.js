import importPlugin from 'eslint-plugin-import'
import rules from './rules/mobal-import-rules.js'

const config = {
    plugins: {
        import: importPlugin,
    },
    rules,
    settings: {
        'import/extensions': [
            '.js',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
        ],
        'import/core-modules': [],
        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$',
        ],
    },
}

export default config
