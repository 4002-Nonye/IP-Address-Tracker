/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "hsl(0, 0%, 59%)",
          200: "hsl(0, 0%, 17%)",
        },
      },
      fontFamily: {
        body: ["Rubik"],
      },
      backgroundImage: {
        "heropattern": "url(../assets/images/pattern-bg.png)",
      },
    },
  },
  plugins: [],
};
