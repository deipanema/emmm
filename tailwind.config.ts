import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      "dark-gray": "#707177",
      "light-gray": "#efefef",
      background: "#fafafa",
      white: "#FFFFFF",
      pink: "#f7a7bb",
      "black-54": "rgba(0, 0, 0, 0.54)",
    },
  },
  plugins: [],
};
export default config;
