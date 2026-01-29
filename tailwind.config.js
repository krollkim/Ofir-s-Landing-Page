/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lilac: {
          50: '#faf5fc',
          100: '#f5ebf9',
          200: '#ead6f2',
          300: '#D8B4E2',
          400: '#c48dd4',
          500: '#a85fc0',
          600: '#8d42a3',
          700: '#753586',
          800: '#612d6e',
          900: '#52285b',
        }
      },
      fontFamily: {
        sans: ['Heebo', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
