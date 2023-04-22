/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "806px",
      },
      fontFamily: {
        viga: ["var(--font-viga)"],
      },
      colors: {
        verde: {
          50: "#FBFEFB",
          100: "#EDFBEF",
          150: "#DFF8E3",
          200: "#D1F5D7",
          250: "#C3F2CA",
          300: "#B5EFBE",
          350: "#A7ECB2",
          400: "#99E9A6",
          450: "#8BE699",
          500: "#7DE38D",
          550: "#45D75C",
          600: "#29C041",
          650: "#23A437",
          700: "#1D882E",
          750: "#176C24",
          800: "#11501B",
          850: "#0B3412",
          900: "#051808",
          950: "#020A03",
        },
      },
    },
  },
  plugins: [],
};
