/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
      },
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
      animation: {
        "slide-in-fwd-bottom":
          "slide-in-fwd-bottom 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "slide-out-fwd-bottom":
          "slide-out-fwd-bottom 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
      },
      keyframes: {
        "slide-in-fwd-bottom": {
          "0%": {
            transform: "translateZ(-1400px) translateY(800px)",
            opacity: "0",
          },
          to: {
            transform: "translateZ(0) translateY(0)",
            opacity: "1",
          },
        },
        "slide-out-fwd-bottom": {
          "0%": {
            transform: "translateZ(0) translateY(0)",
            opacity: "1",
          },
          to: {
            transform: "translateZ(600px) translateY(300px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
