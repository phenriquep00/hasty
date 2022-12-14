/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      animation: {
        header: 'header 2s ease-in-out',
      },
      keyframes: {
        header: {
          "0%" : {
            transform: "scale(0.1) translate(300%, 20%)",
          },
          "100%": {
            transform: "scale(0.2) translate(0%, 0%)",
          },
        },
      },
    },
  },
  plugins: [],
}
