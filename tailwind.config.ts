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
      colors: {
        "palete-1": "#0C0C1D",
        "palete-2": "#FFFFFF",
        "palete-3": "#4B73FF",
        "palete-4": "#F7F9FB",
      },
      fontFamily: {
        base: ["Plus Jakarta Sans", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
export default config;
