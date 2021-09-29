// tailwind.config.js

const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {

        colors: {
          gray: colors.trueGray,
          indigo: colors.indigo,
          red: colors.rose,
          yellow: colors.amber,
          green: colors.emerald,
        },


        height:{
          "screen/2": "50vh",
          "screen/3": "calc(100vh / 3)",
          "screen/4": "calc(100vh / 4)",
          "screen/5": "calc(100vh / 5)",
          "huge": "450px",
          "huge-xl": "700px",
        },

        margin:{
          "huge": "830px",
        }


      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }