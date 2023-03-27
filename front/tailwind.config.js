/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors :{
        'hunter-green' : '#314932',
        'main-green': '#7DCD85',
        'tea-green': '#C2E1C2',
        'reseda': '#778472',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slideLeft: {
          "0%" :{transform: "translateX(600px)"},
          "100%": {transform: "translateX(0px)"}
        },
        slideRight: {
          "0%" :{transform: "translateX(0px)"},
          "100%": {transform: "translateX(600px)"}
        },
      },
      animation: {
        slideLeft: 'slideLeft 1s ease-in-out',
        slideRight: 'slideRight 1s ease-in-out'
      },
    },
  },
  plugins: [],
}
