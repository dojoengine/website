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
        title: ['var(--font-agrandir)'],
        text: ['var(--font-inter)']

      },
      colors: {
        'dojo-blue-200': '#2E486D',
        'dojo-blue-300': '#93bbf3',
        'dojo-blue-400': '#84ADE5',
        'dojo-blue-500': "#4C75AE",
        'dojo-blue-600': "#0C2449",
        'dojo-blue-700': "#031125",
        'dojo-blue': '#071E3F',
        'dojo-blue-light': '#79BFFF',
        'dojo-blue-dark': '#8FBAFF',
        'dojo-red': '#FF2F42',
        'dojo-green': "#77F5B2",
        'dojo-green-light': "#29DEBF",
        'dojo-blue-icon': "#468CFE",

        'tag-science': "#69CBC1",
        'tag-gaming': "#FBCB4A",
        'tag-developer': "#CC6FC3",
        'tag-zk': "#FE2C2E",


        'cartridge': "#FBCB4A",
        'starknet': "#ec796b",
        'game7': "#FE2C2E",
        'mask': "#1C68F3",
        'starkware': "#ffffff",

      }
    },
  },
  plugins: [],
  safelist: ["bg-tag-science", "bg-tag-gaming", "bg-tag-developer", "bg-tag-zk"]
  // safelist: {
  //   pattern: /bg-tag-(science|gaming|developer)/,
  // },

}


