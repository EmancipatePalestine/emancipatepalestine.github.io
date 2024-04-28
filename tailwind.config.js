const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'phone-landscape': {'raw': '(orientation: landscape)'},
      'desktop': { 'raw': '(orientation: landscape) and (min-width: 80rem)'},
    },
    extend: {
      textShadow: {
        sm: '1px 1px 1px var(--tw-shadow-color)',
        DEFAULT: '2px 2px 1.5px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), require("daisyui"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],

  daisyui: {
    themes: ["light", "dracula"]
  }
}

