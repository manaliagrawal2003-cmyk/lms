/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "course-details-heading-sm": ["26px", "36px"],
        "course-details-heading-lg": ["36px", "44px"],
      },
    },
  },
  plugins: [],
};
