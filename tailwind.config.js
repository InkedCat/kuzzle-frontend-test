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
    },
  },
  plugins: [],
}

