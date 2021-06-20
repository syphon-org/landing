module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // eslints
    'indent': ['error', 2],
    'arrow-parens': ['error', 'always'],
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'max-len': ['error', {
      code: 140, tabWidth: 2, ignoreUrls: true, ignoreStrings: true, ignoreTrailingComments: true
    }],
    'comma-dangle': ['error', 'only-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-newline': ['error', { multiline: true, consistent: true, minProperties: 4 }],
    'function-paren-newline': ['error', 'consistent'],
    'computed-property-spacing': ['error', 'never'],
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],

    'import/no-mutable-exports': ['off'],
    'arrow-body-style': ['off'],
    'implicit-arrow-linebreak': ['off'],
    'array-callback-return': ['off'],
    'consistent-return': ['off'],

    // react specific
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-max-props-per-line': ['error'],
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': ['off'],
    'class-methods-use-this': ['off'],
    'no-use-before-define': ['off'],

    // custom lints
    'import/no-dynamic-require': ['off'],
    'import/prefer-default-export': ['off'],
    'import/no-unresolved ': ['off'],
  },
}
