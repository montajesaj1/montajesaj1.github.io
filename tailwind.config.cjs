/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{tsx,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamil: {
        inter: ['inter', 'serif'],
      }
    },
  },
  plugins: [],
}

