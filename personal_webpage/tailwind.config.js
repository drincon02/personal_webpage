/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["homepage/templates/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'ibmfamily': ['ibmvga-1', 'sans-serif'],
      }
    }
  },
  plugins: [],
}