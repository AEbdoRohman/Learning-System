/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pColor :"#525fe1",
        mainColor :"#525fe1",
        hoverColor :"#231f40",
        txtsolor : ""
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"],
      },
      screens:{
        sm:"576px",
        md:"768px",
        lg:"992px",
        xl:"1200px",
        "2xl":"1400px",
      },
    },
  },
  plugins: [],
});