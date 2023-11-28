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
        'dojo-vibrant-blue':"#468CFE", // dojo logo 

        'dojo-blue-200': '#2E486D',

        'dojo-blue-300': '#A7C9F8', // headers ?
        'dojo-blue-400': '#84ADE5', // text 
        'dojo-blue-500': '#4C75AE',
        'dojo-blue-600': '#3C5D8A',
        'dojo-blue-700': '#0C274F', 
        'dojo-blue-800': '#071E3F', // bg 
        'dojo-blue-900': '#031125', // footer 

        'dojo-red-400': '#FF2F42', // hover

        'dojo-green': "#77F5B2", // article
        'dojo-green-light': "#29DEBF", // article

        'tag-science': "#69CBC1",
        'tag-gaming': "#FBCB4A",
        'tag-developer': "#CC6FC3",
        'tag-zk': "#FE2C2E",

        'cartridge': "#FBCB4A",
        'starknet': "#468CFE",
        'game7': "#CC6FC3",
        'mask': "#EB8A8A",
        'starkware': "#6FCCBB",
      },
      container:{
        screens:{
          "default": '100%',
          "sm": '640px',
          "md": '768px',
          "lg": '1024px',
          "xl": '1024px',
          "2xl": '1024px',
        }
      }
    },
  },
  plugins: [],
  safelist: ["bg-tag-science", "bg-tag-gaming", "bg-tag-developer", "bg-tag-zk"]
  // safelist: {
  //   pattern: /bg-tag-(science|gaming|developer)/,
  // },

}


