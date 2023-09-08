/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        textHomeLogin: "#0C89B0"
      },
      backgroundColor:{
        bgBackGroundLogin: "#0C89B0"
      },
      fontFamily:{
        titleFontLogin: "Concert One, cursive",
        textFontLogin: "Amaranth, sans-serif"
      }
      
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-animated')
  ],
}