import jest from 'eslint-plugin-jest'
import importPlugin from 'eslint-plugin-import-x'

const configs = [
    {
        plugins: {
            jest,
            import: importPlugin,
        },
        // update this to match your test files
        files: [
            '**/__mocks__/*.{j,t,mj,mt}s',
            'tests/**/*.spec.{j,t,mj,mt}s?(x)',
            'tests/**/*.{j,t,mj,mt}s?(x)',
            '**/__tests__/*.{j,t,mj,mt}s?(x)',
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
