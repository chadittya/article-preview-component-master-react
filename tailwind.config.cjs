/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-veryDarkGrayishBlue": "hsl(217, 19%, 35%)",
        "c-desaturatedDarkBlue": "hsl(214, 17%, 51%)",
        "c-grayishBlue": "hsl(212, 23%, 69%)",
        "c-lightGrayishBlue": "hsl(210, 46%, 95%)",
      },
      fontWeight: {
        "cfw-500": "500",
        "cfw-700": "700",
      },
    },
  },
  plugins: [],
};
