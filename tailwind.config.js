/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      colors: {
        text: {
          white: "#FFFFFF",
          black: "#03152E",
          purple: "#614BF8",
        },
        button: {
          purple: "#321CC4",
        },
        badge: {
          yellow: "#FBCB4A",
          fuchsiaa: "#F568D6",
          red: "#FD4544",
          teal: "#6FCCBB",
        },
        background: {
          dark: "#021531",
          purple: "#1B1579",
        },
        stroke: {
          purple: "#4E38E1",
        },
      },
    },
  },
  plugins: [],
};
