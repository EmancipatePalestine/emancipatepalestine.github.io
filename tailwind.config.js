const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'phone-landscape': {'raw': '(min-width: 40rem)'},
      'desktop': { 'raw': '(min-width: 100rem)'},
    },
    extend: {
    },
  },
  plugins: [
    require("@tailwindcss/typography"), require("daisyui"),
  ],

  daisyui: {
    themes: ["dracula"]
  }
}

