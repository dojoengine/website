import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        title: ["var(--font-agrandir)"],
        text: ["var(--font-inter)"],
      },
      container: {
        screens: {
          default: "100%",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1024px",
          "2xl": "1024px",
        },
      },
      colors: {
        "dojo-vibrant-blue": "#468CFE", // dojo logo

        "dojo-blue-200": "#2E486D",

        "dojo-blue-300": "#A7C9F8", // headers ?
        "dojo-blue-400": "#84ADE5", // text
        "dojo-blue-500": "#4C75AE",
        "dojo-blue-600": "#3C5D8A",
        "dojo-blue-650": "#12305C",
        "dojo-blue-700": "#0C274F",
        "dojo-blue-750": "#0C2449",
        "dojo-blue-800": "#071E3F", // bg
        "dojo-blue-900": "#031125", // footer

        "dojo-red-400": "#FF2F42", // hover

        "dojo-green": "#77F5B2", // article
        "dojo-green-light": "#29DEBF", // article

        "tag-technology": "#69CBC1",
        "tag-gaming": "#FBCB4A",
        "tag-developer": "#CC6FC3",
        "tag-zk": "#FE2C2E",

        cartridge: "#FBCB4A",
        starknet: "#468CFE",
        game7: "#CC6FC3",
        mask: "#EB8A8A",
        starkware: "#6FCCBB",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    "bg-tag-science",
    "bg-tag-gaming",
    "bg-tag-developer",
    "bg-tag-zk",
  ],
} satisfies Config;

export default config;
