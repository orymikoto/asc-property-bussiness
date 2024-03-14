import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        base: ["Plus Jakarta Sans", "sans-serif"],
        MagicRetro: ["MagicRetro"],
        ChopinScript: ["ChopinScript"],
        "bebas-neue": ["Bebas Neue", "sans-serif"],
        "josefin-sans": ["Josefin Sans", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
