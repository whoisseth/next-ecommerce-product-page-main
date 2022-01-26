module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary

        //  Primary

        orange: "hsl(26, 100%, 55%)",
        "pale-orange": "hsl(25, 100%, 94%)",

        // Neutral
        "very-vark-blue": "hsl(220, 13%, 13%)",
        "dark-grayish-blue": "hsl(219, 9%, 45%)",
        "grayish-blue": "hsl(220, 14%, 75%)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",
        White: "hsl(0, 0%, 100%)",
        "black-opacity": "hsl(0, 0%, 0%)",
      },
    },
  },
  plugins: [],
};
