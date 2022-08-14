/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'orange': 'hsl(25, 97%, 53%)',
      'white': 'hsl(0, 0%, 100%)',
      'light-grey': 'hsl(217, 12%, 63%)',
      'medium-grey': '#262f38',
      'dark-blue': '#1c232d',
      'very-dark-blue': '#141519',
    },
    fontFamily: {
      'sans': ['Overpass', 'sans-serif']
    }
  },
  plugins: [],
}
