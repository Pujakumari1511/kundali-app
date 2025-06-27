/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FAE6B8",
        secondary: "#b8fad6",
        accent: "#F59E0B",
      },
      fontFamily: {
        sans: ["stroke"], // add your custom fonts
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
