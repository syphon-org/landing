module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  rules: {
    // formatting
    indent: ['warn', 2, { SwitchCase: 1 }],
    'arrow-parens': ['warn', 'always'],
    quotes: ['warn', 'single'],
    'max-len': ['error', {
      code: 120, tabWidth: 2, ignoreUrls: true, ignoreStrings: true, ignoreTrailingComments: true
    }],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-unused-vars': ['error'],
    semi: ['error', 'never'],

    // unused
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}

