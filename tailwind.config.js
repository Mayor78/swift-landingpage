/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonYellowGreen: '#D0FF14',
        deepGreen : '#657432'
      },

    },
  },
  plugins: [],
}