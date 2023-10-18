import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        textHomeLogin: "#0C89B0",
        colorGreen: "#83ffdf",
      },
      backgroundColor: {
        bgBackGroundLogin: "#0C89B0",
        bgGreen: "#83ffdf",
      },
      fontFamily: {
        titleFontLogin: "'Concert One', 'cursive'",
        textFontLogin: "Amaranth, sans-serif",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwindcss-animated"),
    nextui(),
  ],
};
