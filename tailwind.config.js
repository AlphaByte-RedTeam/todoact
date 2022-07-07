/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'dark-yellow': '#FFAC33'
    },
    fontFamily: {
      'sans': ['Exo\\ 2'],
      'roboto-mono': ['Roboto\\ Mono'],
      'nunito': ['Nunito']
    },
    fontSize: {
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  darkMode: 'class',
}
