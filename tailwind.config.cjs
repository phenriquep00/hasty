/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      animation: {
        header: "header 2s ease-in-out",
        headerText: "headerText 2s ease-in-out",
        littleLegends: "littleLegends 3s ease-in-out",
      },
      keyframes: {
        header: {
          "0%": {
            transform: "scale(0.1) translate(300%, 20%)",
            opacity: 0
          },
          "100%": {
            transform: "scale(0.2) translate(0%, 0%)",
            opacity: 1
          },
        },
        headerText: {
          "0%": {
            transform: "scale(0.1) translate(300%, 20%)",
            opacity: 0
          },
          "100%": {
            transform: "scale(1) translate(0%, 0%)",
            opacity: 1
          },
        },
        littleLegends: {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          },
        },
      },
    },
  },
  plugins: [],
};
