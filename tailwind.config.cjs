/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");

export default {
  content: ['./index.html', './src/**/*.{tsx,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        young: ["Young Serif", "serif"],
        poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

