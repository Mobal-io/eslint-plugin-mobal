import jest from 'eslint-plugin-jest'
import importPlugin from 'eslint-plugin-import'

const configs = [
    {
        plugins: {
            jest,
            import: importPlugin,
        },
        // update this to match your test files
        files: [
            '**/__mocks__/*.{j,t}s',
            'tests/**/*.spec.{j,t}s?(x)',
            'tests/**/*.{j,t}s?(x)',
            '**/__tests__/*.{j,t}s?(x)',
        ],
        languageOptions: {
            globals: {
                global: true,
                ...jest.environments.globals.globals,
            },
        },
        rules: {
            'import/prefer-default-export': 'off',
            'import/extensions': ['error', 'never', {
                'vue': 'always',
                'json': 'always',
                'spec': 'always',
            }],
            'import/no-unresolved': 'off',
            'no-await-in-loop': 'off',
            '@typescript-eslint/no-shadow': 'off',
        },
    },
]

export default configs
