/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lineSeed: ["LineSeed", "sans-serif"],
      },
      colors: {
        primary: "#88b735",
        secondary: "#707072",
        dark: "#030712",
        light: "#f8fafc",
      },
      height: {
        112: "28rem",
        128: "32rem",
        200: "50rem",
      },
    },
  },
  plugins: [],
};
