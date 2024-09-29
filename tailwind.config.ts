import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1abc9c",
        secondary: "#30C88F",
        tertiary: "#2D314D",
        appGray: "#9596A5",
      },
    },
  },
  plugins: [],
};
export default config;
