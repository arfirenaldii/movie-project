/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      md: '990px'
    },
    container: {
      padding: '2rem',
      screens: {
        lg: '1280px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
