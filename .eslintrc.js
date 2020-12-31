module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
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
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'react/prefer-stateless-function': [0, { ignorePureComponents: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-max-props-per-line': [2, { maximum: 2, when: 'multiline' }],
    'react/destructuring-assignment': [0, 'always', { ignoreClassFields: true }],
    'max-classes-per-file': 0,
    'no-underscore-dangle': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
