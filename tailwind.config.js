/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: '2rem',
      screens: {
        lg: '1280px'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
