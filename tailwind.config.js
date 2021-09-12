const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/pages/**/*.js',
    './src/pages/**/*.ts',
    './src/pages/**/*.jsx',
    './src/pages/**/*.tsx',
    './src/components/**/*.js',
    './src/components/**/*.ts',
    './src/components/**/*.jsx',
    './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: { 
          '500': '#34C7B5',
        },
        'teal':  '#34C7B5',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}
