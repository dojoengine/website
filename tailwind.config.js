/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'dojo-blue': '#071E3F',
        'dojo-blue-light': '#84ADE5',
        'dojo-blue-med' : "#3C5D8A" ,
        'dojo-red': '#FF2F42',
      }
    },
  },
  plugins: [],
}
