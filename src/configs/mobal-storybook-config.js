import importPlugin from 'eslint-plugin-import'

const config = {
    plugins: {
        import: importPlugin,
    },
    files: [
        'src/**/*stories.{j,t,mj,mt}s',
    ],
    rules: {
        'import/no-extraneous-dependencies': 'off',
    },
}

export default config
