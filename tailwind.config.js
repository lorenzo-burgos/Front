/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#416435',
        'primary-highlight': '#83C86A',
        'background': '#E1E2E3',
        'grey': '#343434',
        'grey-light': '#696669',
        'secondary': '#1A3B5C',
        'secondary-highlight': '#15A6B7',
        'text': '#0b0c0d',
        'text-highlight': '#141414',
      },
      fontFamily: {
        'title': ['Chivo', 'sans-serif'],
        'text': ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'default': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

