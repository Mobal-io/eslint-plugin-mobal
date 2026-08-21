import { importCompat } from '../compat-plugins.js'

const config = {
    plugins: {
        import: importCompat,
    },
    files: [
        'src/**/*stories.{j,t,mj,mt}s',
    ],
    rules: {
        'import/no-extraneous-dependencies': 'off',
    },
}

export default config
