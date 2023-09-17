/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jx,jsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    backgroundColor: {
      primary: '#0a192f',
    },
    extend: {},
  },
  plugins: [],
}

