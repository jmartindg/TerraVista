/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["emerald"],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
