// mostly taken from airbnb config
export default {
    'no-duplicate-imports': ['off'],
    'no-restricted-imports': [
        'off',
        {
            'paths': [],
            'patterns': [],
        },
    ],
    'sort-imports': [
        'off',
        {
            'ignoreCase': false,
            'ignoreDeclarationSort': false,
            'ignoreMemberSort': false,
            'memberSyntaxSortOrder': [
                'none',
                'all',
                'multiple',
                'single',
            ],
        },
    ],
    'no-import-assign': ['error'],
    'strict': [
        'error',
        'never',
    ],
    'arrow-parens': [
        'error',
        'always',
    ],
    'arrow-spacing': [
        'error',
        {
            'before': true,
            'after': true,
        },
    ],
    'constructor-super': ['error'],
    'generator-star-spacing': [
        'error',
        {
            'before': false,
            'after': true,
        },
    ],
    'no-class-assign': ['error'],
    'no-confusing-arrow': [
        'error',
        {
            'allowParens': true,
            'onlyOneSimpleParam': false,
        },
    ],
    'no-const-assign': ['error'],
    'no-dupe-class-members': ['error'],
    'no-new-symbol': ['error'],
    'no-restricted-exports': [
        'error',
        {
            'restrictedNamedExports': [
                'default',
                'then',
            ],
        },
    ],
    'no-this-before-super': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-constructor': ['error'],
    'no-useless-rename': [
        'error',
        {
            'ignoreDestructuring': false,
            'ignoreImport': false,
            'ignoreExport': false,
        },
    ],
    'object-shorthand': [
        'error',
        'always',
        {
            'ignoreConstructors': false,
            'avoidQuotes': true,
        },
    ],
    'prefer-arrow-callback': [
        'error',
        {
            'allowNamedFunctions': false,
            'allowUnboundThis': true,
        },
    ],
    'prefer-numeric-literals': ['error'],
    'prefer-reflect': ['off'],
    'prefer-template': ['error'],
    'require-yield': ['error'],
    'rest-spread-spacing': [
        'error',
        'never',
    ],
    'symbol-description': ['error'],
    'template-curly-spacing': ['error'],
    'yield-star-spacing': [
        'error',
        'after',
    ],
    'init-declarations': ['off'],
    'no-catch-shadow': ['off'],
    'no-delete-var': ['error'],
    'no-label-var': ['error'],
    'no-restricted-globals': [
        'error',
        {
            'name': 'isFinite',
            'message': 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
        },
        {
            'name': 'isNaN',
            'message': 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
        },
        'addEventListener',
        'blur',
        'close',
        'closed',
        'confirm',
        'defaultStatus',
        'defaultstatus',
        'event',
        'external',
        'find',
        'focus',
        'frameElement',
        'frames',
        'history',
        'innerHeight',
        'innerWidth',
        'length',
        'location',
        'locationbar',
        'menubar',
        'moveBy',
        'moveTo',
        'name',
        'onblur',
        'onerror',
        'onfocus',
        'onload',
        'onresize',
        'onunload',
        'open',
        'opener',
        'opera',
        'outerHeight',
        'outerWidth',
        'pageXOffset',
        'pageYOffset',
        'parent',
        'print',
        'removeEventListener',
        'resizeBy',
        'resizeTo',
        'screen',
        'screenLeft',
        'screenTop',
        'screenX',
        'screenY',
        'scroll',
        'scrollbars',
        'scrollBy',
        'scrollTo',
        'scrollX',
        'scrollY',
        'self',
        'status',
        'statusbar',
        'stop',
        'toolbar',
        'top',
    ],
    'no-shadow-restricted-names': ['error'],
    'no-undef': ['error'],
    'no-undef-init': ['error'],
    'no-undefined': ['off'],
    'no-use-before-define': [
        'error',
        {
            'functions': true,
            'classes': true,
            'variables': true,
        },
    ],
    'array-bracket-newline': [
        'off',
        'consistent',
    ],
    'array-element-newline': [
        'off',
        {
            'multiline': true,
            'minItems': 3,
        },
    ],
    'array-bracket-spacing': [
        'error',
        'never',
    ],
    'block-spacing': [
        'error',
        'always',
    ],
    'capitalized-comments': [
        'off',
        'never',
        {
            'line': {
                'ignorePattern': '.*',
                'ignoreInlineComments': true,
                'ignoreConsecutiveComments': true,
            },
            'block': {
                'ignorePattern': '.*',
                'ignoreInlineComments': true,
                'ignoreConsecutiveComments': true,
            },
        },
    ],
    'comma-spacing': [
        'error',
        {
            'before': false,
            'after': true,
        },
    ],
    'comma-style': [
        'error',
        'last',
        {
            'exceptions': {
                'ArrayExpression': false,
                'ArrayPattern': false,
                'ArrowFunctionExpression': false,
                'CallExpression': false,
                'FunctionDeclaration': false,
                'FunctionExpression': false,
                'ImportDeclaration': false,
                'ObjectExpression': false,
                'ObjectPattern': false,
                'VariableDeclaration': false,
                'NewExpression': false,
            },
        },
    ],
    'computed-property-spacing': [
        'error',
        'never',
    ],
    'consistent-this': ['off'],
    'eol-last': [
        'error',
        'always',
    ],
    'function-call-argument-newline': [
        'error',
        'consistent',
    ],
    'func-call-spacing': [
        'error',
        'never',
    ],
    'func-name-matching': [
        'off',
        'always',
        {
            'includeCommonJSModuleExports': false,
            'considerPropertyDescriptor': true,
        },
    ],
    'func-names': ['warn'],
    'func-style': [
        'off',
        'expression',
    ],
    'function-paren-newline': [
        'error',
        'multiline-arguments',
    ],
    'id-denylist': ['off'],
    'id-length': ['off'],
    'id-match': ['off'],
    'implicit-arrow-linebreak': [
        'error',
        'beside',
    ],
    'jsx-quotes': [
        'off',
        'prefer-double',
    ],
    'key-spacing': [
        'error',
        {
            'beforeColon': false,
            'afterColon': true,
        },
    ],
    'keyword-spacing': [
        'error',
        {
            'before': true,
            'after': true,
            'overrides': {
                'return': {
                    'after': true,
                },
                'throw': {
                    'after': true,
                },
                'case': {
                    'after': true,
                },
            },
        },
    ],
    'line-comment-position': [
        'off',
        {
            'position': 'above',
            'ignorePattern': '',
            'applyDefaultPatterns': true,
        },
    ],
    'linebreak-style': [
        'error',
        'unix',
    ],
    'lines-between-class-members': [
        'error',
        'always',
        {
            'exceptAfterSingleLine': false,
        },
    ],
    'lines-around-comment': ['off'],
    'lines-around-directive': [
        'error',
        {
            'before': 'always',
            'after': 'always',
        },
    ],
    'max-depth': [
        'off',
        4,
    ],
    'max-lines': [
        'off',
        {
            'max': 300,
            'skipBlankLines': true,
            'skipComments': true,
        },
    ],
    'max-lines-per-function': [
        'off',
        {
            'max': 50,
            'skipBlankLines': true,
            'skipComments': true,
            'IIFEs': true,
        },
    ],
    'max-nested-callbacks': ['off'],
    'max-params': [
        'off',
        3,
    ],
    'max-statements': [
        'off',
        10,
    ],
    'max-statements-per-line': [
        'off',
        {
            'max': 1,
        },
    ],
    'multiline-comment-style': [
        'off',
        'starred-block',
    ],
    'new-cap': [
        'error',
        {
            'newIsCap': true,
            'newIsCapExceptions': [],
            'capIsNew': false,
            'capIsNewExceptions': [
                'Immutable.Map',
                'Immutable.Set',
                'Immutable.List',
            ],
            'properties': true,
        },
    ],
    'new-parens': ['error'],
    'newline-after-var': ['off'],
    'newline-before-return': ['off'],
    'newline-per-chained-call': [
        'error',
        {
            'ignoreChainWithDepth': 4,
        },
    ],
    'no-bitwise': ['error'],
    'no-continue': ['error'],
    'no-inline-comments': ['off'],
    'no-lonely-if': ['error'],
    'no-mixed-operators': [
        'error',
        {
            'groups': [
                [
                    '%',
                    '**',
                ],
                [
                    '%',
                    '+',
                ],
                [
                    '%',
                    '-',
                ],
                [
                    '%',
                    '*',
                ],
                [
                    '%',
                    '/',
                ],
                [
                    '/',
                    '*',
                ],
                [
                    '&',
                    '|',
                    '<<',
                    '>>',
                    '>>>',
                ],
                [
                    '==',
                    '!=',
                    '===',
                    '!==',
                ],
                [
                    '&&',
                    '||',
                ],
            ],
            'allowSamePrecedence': false,
        },
    ],
    'no-mixed-spaces-and-tabs': ['error'],
    'no-multi-assign': ['error'],
    'no-multiple-empty-lines': [
        'error',
        {
            'max': 1,
            'maxBOF': 0,
            'maxEOF': 0,
        },
    ],
    'no-negated-condition': ['off'],
    'no-nested-ternary': ['error'],
    'no-new-object': ['error'],
    'no-plusplus': ['error'],
    'no-spaced-func': ['error'],
    'no-tabs': ['error'],
    'no-ternary': ['off'],
    'no-trailing-spaces': [
        'error',
        {
            'skipBlankLines': false,
            'ignoreComments': false,
        },
    ],
    'no-underscore-dangle': [
        'error',
        {
            'allow': [],
            'allowAfterThis': false,
            'allowAfterSuper': false,
            'enforceInMethodNames': true,
            'allowAfterThisConstructor': false,
            'allowFunctionParams': true,
            'enforceInClassFields': false,
            'allowInArrayDestructuring': true,
            'allowInObjectDestructuring': true,
        },
    ],
    'no-unneeded-ternary': [
        'error',
        {
            'defaultAssignment': false,
        },
    ],
    'no-whitespace-before-property': ['error'],
    'nonblock-statement-body-position': [
        'error',
        'beside',
        {
            'overrides': {},
        },
    ],
    'object-curly-spacing': [
        'error',
        'always',
    ],
    'object-curly-newline': [
        'error',
        {
            'ObjectExpression': {
                'minProperties': 4,
                'multiline': true,
                'consistent': true,
            },
            'ObjectPattern': {
                'minProperties': 4,
                'multiline': true,
                'consistent': true,
            },
            'ImportDeclaration': {
                'minProperties': 4,
                'multiline': true,
                'consistent': true,
            },
            'ExportDeclaration': {
                'minProperties': 4,
                'multiline': true,
                'consistent': true,
            },
        },
    ],
    'one-var': [
        'error',
        'never',
    ],
    'one-var-declaration-per-line': [
        'error',
        'always',
    ],
    'operator-assignment': [
        'error',
        'always',
    ],
    'operator-linebreak': [
        'error',
        'before',
        {
            'overrides': {
                '=': 'none',
            },
        },
    ],
    'padded-blocks': [
        'error',
        {
            'blocks': 'never',
            'classes': 'never',
            'switches': 'never',
        },
        {
            'allowSingleLineBlocks': true,
        },
    ],
    'padding-line-between-statements': ['off'],
    'prefer-exponentiation-operator': ['error'],
    'prefer-object-spread': ['error'],
    'require-jsdoc': ['off'],
    'semi-spacing': [
        'error',
        {
            'before': false,
            'after': true,
        },
    ],
    'semi-style': [
        'error',
        'last',
    ],
    'sort-keys': [
        'off',
        'asc',
        {
            'caseSensitive': false,
            'natural': true,
        },
    ],
    'sort-vars': ['off'],
    'space-before-blocks': ['error'],
    'space-in-parens': [
        'error',
        'never',
    ],
    'space-infix-ops': ['error'],
    'space-unary-ops': [
        'error',
        {
            'words': true,
            'nonwords': false,
            'overrides': {},
        },
    ],
    'spaced-comment': [
        'error',
        'always',
        {
            'line': {
                'exceptions': [
                    '-',
                    '+',
                ],
                'markers': [
                    '=',
                    '!',
                    '/',
                ],
            },
            'block': {
                'exceptions': [
                    '-',
                    '+',
                ],
                'markers': [
                    '=',
                    '!',
                    ':',
                    '::',
                ],
                'balanced': true,
            },
        },
    ],
    'switch-colon-spacing': [
        'error',
        {
            'after': true,
            'before': false,
        },
    ],
    'template-tag-spacing': [
        'error',
        'never',
    ],
    'unicode-bom': [
        'error',
        'never',
    ],
    'wrap-regex': ['off'],
    'callback-return': ['off'],
    'global-require': ['error'],
    'handle-callback-err': ['off'],
    'no-buffer-constructor': ['error'],
    'no-mixed-requires': [
        'off',
        false,
    ],
    'no-new-require': ['error'],
    'no-path-concat': ['error'],
    'no-process-env': ['off'],
    'no-process-exit': ['off'],
    'no-restricted-modules': ['off'],
    'no-sync': ['off'],
    'for-direction': ['error'],
    'getter-return': [
        'error',
        {
            'allowImplicit': true,
        },
    ],
    'no-async-promise-executor': ['error'],
    'no-await-in-loop': ['error'],
    'no-compare-neg-zero': ['error'],
    'no-cond-assign': [
        'error',
        'always',
    ],
    'no-constant-condition': ['warn'],
    'no-control-regex': ['error'],
    'no-dupe-args': ['error'],
    'no-dupe-else-if': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-empty': ['error'],
    'no-empty-character-class': ['error'],
    'no-ex-assign': ['error'],
    'no-extra-boolean-cast': ['error'],
    'no-extra-parens': [
        'off',
        'all',
        {
            'conditionalAssign': true,
            'nestedBinaryExpressions': false,
            'returnAssign': false,
            'ignoreJSX': 'all',
            'enforceForArrowConditionals': false,
        },
    ],
    'no-extra-semi': ['error'],
    'no-func-assign': ['error'],
    'no-inner-declarations': ['error'],
    'no-invalid-regexp': ['error'],
    'no-irregular-whitespace': ['error'],
    'no-misleading-character-class': ['error'],
    'no-obj-calls': ['error'],
    'no-promise-executor-return': ['error'],
    'no-prototype-builtins': ['error'],
    'no-regex-spaces': ['error'],
    'no-setter-return': ['error'],
    'no-sparse-arrays': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-unexpected-multiline': ['error'],
    'no-unreachable': ['error'],
    'no-unreachable-loop': [
        'error',
        {
            'ignore': [],
        },
    ],
    'no-unsafe-finally': ['error'],
    'no-unsafe-negation': ['error'],
    'no-unsafe-optional-chaining': [
        'error',
        {
            'disallowArithmeticOperators': true,
        },
    ],
    'no-unused-private-class-members': ['off'],
    'no-useless-backreference': ['error'],
    'no-negated-in-lhs': ['off'],
    'require-atomic-updates': ['off'],
    'use-isnan': ['error'],
    'valid-jsdoc': ['off'],
    'valid-typeof': [
        'error',
        {
            'requireStringLiterals': true,
        },
    ],
    'accessor-pairs': ['off'],
    'array-callback-return': [
        'error',
        {
            'allowImplicit': true,
            'checkForEach': false,
            'allowVoid': false,
        },
    ],
    'block-scoped-var': ['error'],
    'complexity': [
        'warn',
        15,
    ],
    'class-methods-use-this': [
        'error',
        {
            'exceptMethods': [],
            'enforceForClassFields': true,
        },
    ],
    'consistent-return': ['error'],
    'default-case': [
        'error',
        {
            'commentPattern': '^no default$',
        },
    ],
    'default-case-last': ['error'],
    'default-param-last': ['error'],
    'dot-notation': [
        'error',
        {
            'allowKeywords': true,
            'allowPattern': '',
        },
    ],
    'dot-location': [
        'error',
        'property',
    ],
    'eqeqeq': [
        'error',
        'always',
        {
            'null': 'ignore',
        },
    ],
    'grouped-accessor-pairs': ['error'],
    'guard-for-in': ['error'],
    'no-alert': ['warn'],
    'no-caller': ['error'],
    'no-case-declarations': ['error'],
    'no-constructor-return': ['error'],
    'no-div-regex': ['off'],
    'no-else-return': [
        'error',
        {
            'allowElseIf': false,
        },
    ],
    'no-empty-function': [
        'error',
        {
            'allow': [
                'arrowFunctions',
                'functions',
                'methods',
            ],
        },
    ],
    'no-empty-pattern': ['error'],
    'no-eq-null': ['off'],
    'no-eval': ['error'],
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-extra-label': ['error'],
    'no-fallthrough': ['error'],
    'no-floating-decimal': ['error'],
    'no-global-assign': [
        'error',
        {
            'exceptions': [],
        },
    ],
    'no-native-reassign': ['off'],
    'no-implicit-coercion': [
        'off',
        {
            'boolean': false,
            'number': true,
            'string': true,
            'allow': [],
        },
    ],
    'no-implicit-globals': ['off'],
    'no-implied-eval': ['error'],
    'no-invalid-this': ['off'],
    'no-iterator': ['error'],
    'no-labels': [
        'error',
        {
            'allowLoop': false,
            'allowSwitch': false,
        },
    ],
    'no-lone-blocks': ['error'],
    'no-loop-func': ['error'],
    'no-magic-numbers': [
        'off',
        {
            'ignore': [],
            'ignoreArrayIndexes': true,
            'enforceConst': true,
            'detectObjects': false,
        },
    ],
    'no-multi-spaces': [
        'error',
        {
            'ignoreEOLComments': false,
        },
    ],
    'no-multi-str': ['error'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-wrappers': ['error'],
    'no-nonoctal-decimal-escape': ['error'],
    'no-octal': ['error'],
    'no-octal-escape': ['error'],
    'no-proto': ['error'],
    'no-redeclare': ['error'],
    'no-restricted-properties': [
        'error',
        {
            'object': 'arguments',
            'property': 'callee',
            'message': 'arguments.callee is deprecated',
        },
        {
            'object': 'global',
            'property': 'isFinite',
            'message': 'Please use Number.isFinite instead',
        },
        {
            'object': 'self',
            'property': 'isFinite',
            'message': 'Please use Number.isFinite instead',
        },
        {
            'object': 'window',
            'property': 'isFinite',
            'message': 'Please use Number.isFinite instead',
        },
        {
            'object': 'global',
            'property': 'isNaN',
            'message': 'Please use Number.isNaN instead',
        },
        {
            'object': 'self',
            'property': 'isNaN',
            'message': 'Please use Number.isNaN instead',
        },
        {
            'object': 'window',
            'property': 'isNaN',
            'message': 'Please use Number.isNaN instead',
        },
        {
            'property': '__defineGetter__',
            'message': 'Please use Object.defineProperty instead.',
        },
        {
            'property': '__defineSetter__',
            'message': 'Please use Object.defineProperty instead.',
        },
        {
            'object': 'Math',
            'property': 'pow',
            'message': 'Use the exponentiation operator (**) instead.',
        },
    ],
    'no-return-assign': [
        'error',
        'always',
    ],
    'no-return-await': ['error'],
    'no-script-url': ['error'],
    'no-self-assign': [
        'error',
        {
            'props': true,
        },
    ],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-throw-literal': ['error'],
    'no-unmodified-loop-condition': ['off'],
    'no-unused-expressions': [
        'error',
        {
            'allowShortCircuit': false,
            'allowTernary': false,
            'allowTaggedTemplates': false,
            'enforceForJSX': false,
        },
    ],
    'no-unused-labels': ['error'],
    'no-useless-call': ['off'],
    'no-useless-catch': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-escape': ['error'],
    'no-useless-return': ['error'],
    'no-void': ['error'],
    'no-warning-comments': [
        'off',
        {
            'terms': [
                'todo',
                'fixme',
                'xxx',
            ],
            'location': 'start',
        },
    ],
    'no-with': ['error'],
    'prefer-promise-reject-errors': [
        'error',
        {
            'allowEmptyReject': true,
        },
    ],
    'prefer-named-capture-group': ['off'],
    'prefer-regex-literals': [
        'error',
        {
            'disallowRedundantWrapping': true,
        },
    ],
    'require-await': ['off'],
    'require-unicode-regexp': ['off'],
    'vars-on-top': ['error'],
    'wrap-iife': [
        'error',
        'outside',
        {
            'functionPrototypeMethods': false,
        },
    ],
    'yoda': ['error'],
}
