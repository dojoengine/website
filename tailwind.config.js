/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-agrandir)']
      },
      colors: {
        'dojo-blue-200': '#2E486D',
        'dojo-blue-300': '#93bbf3',
        'dojo-blue-400': '#84ADE5',
        'dojo-blue-500': "#4C75AE",
        'dojo-blue-600': "#0C2449",
        'dojo-blue-700': "#031125",
        'dojo-blue': '#071E3F',
        'dojo-red': '#FF2F42',
      }
    },
  },
  plugins: [],
}
