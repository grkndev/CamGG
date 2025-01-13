/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#090909",
      },
      animation: {
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        "ping-re": {
          "100%": {
            transform: "scale(2)",
            opacity: 0.5,
          },

          "50%": {
            transform: "scale(1.5)",
            opacity: 1,
          },
          "0%": {
            transform: "scale(0.5)",
            opacity: 0.5,
          },
        },
      },
    },
  },
  plugins: [],
};
