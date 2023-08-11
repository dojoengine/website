/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dojo-blue-300': '#93bbf3',
        'dojo-blue-400': '#84ADE5',
        'dojo-blue-500': "#4C75AE",
        'dojo-blue-600': "#3C5D8A",
        'dojo-blue': '#071E3F',
        'dojo-red': '#FF2F42',
      }
    },
  },
  plugins: [],
}
