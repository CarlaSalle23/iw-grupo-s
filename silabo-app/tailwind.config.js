/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: '#0ea5e9',
          softwhite: '#f9f9f9'
        }
      },
    },
    plugins: [],
  }
  