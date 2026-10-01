import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        burgundy: "#5c0a1a",
        gold: "#c5a044",
        cream: "#faf7f2",
        linen: "#e8e3dc",
        mist: "#ebe8e0",
        slate: "#4a5264",
        ink: "#1c1616"
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Arial", "Helvetica", "sans-serif"]
      }
    }
  },
  plugins: []
} satisfies Config;
