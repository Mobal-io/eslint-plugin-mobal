import { importCompat } from '../compat-plugins.js'
import rules from './rules/mobal-import-rules.js'

const config = {
    plugins: {
        import: importCompat,
    },
    rules,
    settings: {
        'import/extensions': [
            '.js',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.mts',
        ],
        'import/core-modules': [],
        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$',
        ],
    },
}

export default config
