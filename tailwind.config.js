/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-grey-dark": "#0B131E",
        "custom-grey-light": "#202B3B",
        "custom-blue": "#0095FF",
      },
    },
  },
  plugins: [],
};
