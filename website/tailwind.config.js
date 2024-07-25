/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        default: {
          css: {
            "--tw-prose-body": theme("colors.white"),
            "--tw-prose-headings": theme("colors.white"),
            "--tw-prose-lead": theme("colors.white"),
            "--tw-prose-links": theme("colors.white"),
            "--tw-prose-bold": theme("colors.white"),
            "--tw-prose-counters": theme("colors.white"),
            "--tw-prose-bullets": theme("colors.white"),
            "--tw-prose-hr": theme("colors.white"),
            "--tw-prose-quotes": theme("colors.white"),
            "--tw-prose-quote-borders": theme("colors.white"),
            "--tw-prose-captions": theme("colors.white"),
            "--tw-prose-code": theme("colors.white"),
            "--tw-prose-pre-code": theme("colors.white"),
            "--tw-prose-pre-bg": theme("colors.white"),
            "--tw-prose-th-borders": theme("colors.white"),
            "--tw-prose-td-borders": theme("colors.white"),
            "--tw-prose-invert-body": theme("colors.white"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.white"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.pink[400]"),
            "--tw-prose-invert-bullets": theme("colors.pink[600]"),
            "--tw-prose-invert-hr": theme("colors.pink[700]"),
            "--tw-prose-invert-quotes": theme("colors.pink[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.pink[700]"),
            "--tw-prose-invert-captions": theme("colors.pink[400]"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.pink[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.pink[600]"),
            "--tw-prose-invert-td-borders": theme("colors.pink[700]"),
          },
        },
      }),
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
      borderWidth: {
        8: "8px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        primary: "#321CC4",
        secondary: "#151768",
        tertiary: "#6452DE",
        black: "#03152E",
        text: {
          black: "#03152E",
          purple: "#614BF8",
        },
        button: {
          purple: "#321CC4",
        },
        badge: {
          yellow: "#FBCB4A",
          fuchsia: "#F568D6",
          red: "#FD4544",
          teal: "#6FCCBB",
          blue: "#1936A1",
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
  plugins: [require("@tailwindcss/typography")],
};
