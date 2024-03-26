/** @type {import('tailwindcss').Config} */

/* eslint-disable global-require */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    "prettier-plugin-tailwindcss",
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes").light,
          primary: "#2563eb",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes").dark,
          "base-content": "#dddeee",
        },
      },
    ],
  },
  theme: {
    extend: {
      keyframes: {
        expand: {
          "0%": {
            transform: "translateX(0%) scaleX(0%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0%) scaleX(100%)",
            opacity: "1",
          },
        },
      },
      animation: {
        expand: "expand 0.3s ease-in-out",
      },
    },
  },
};
/* eslint-enable global-require */
