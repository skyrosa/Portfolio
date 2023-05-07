
module.exports = {
  mode: 'jit',
  content: [ "./src/**/*.{js,jsx,ts,tsx}", './public/index.html' ],
  darkMode: 'class', // or 'media' or 'class'

  theme: {
    extend: {},
    colors: {
      white: '#FFFAFA',
      yellow: '#FFF9F2',
      pink: '#FFCCC4',
      red: '#CE0000',
      coffee: '#910000',
      brown: '#470000',
      navy: '#0D0060',
    },
  
    fontFamily: {
      h1: ['Aldrich', 'sans-serif'],
      h2: ['VT323', 'monospace'],
  
    },
      plugins: [],
  },

    }