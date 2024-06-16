/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./index.html"],  /* path of the file to check for tw utility classes */
  theme: {
    screens: {
      '8xl': '1360px',
      '3xs': '370px',
      '2xs': '410px',
      'xs': '524px',
      'mid': '930px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif']
    }
    },
  },
  plugins: [],
}
