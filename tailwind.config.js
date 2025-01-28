/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html",
    "./public/**/*.{js,css}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: '600px',
         md: '900px',
        xl: '1200px',
       
      }
    },
  },
  plugins: [],
}

