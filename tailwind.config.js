const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter' : [
          'Inter',
          ...fontFamily.sans
        ]
      },
      colors: {
        'primary-blue' : "#0049FF",
        'primary-background' : "#1A1A1A",
        'secondary-background' : "#141414"
      }
    },
  },
  plugins: [],
}

