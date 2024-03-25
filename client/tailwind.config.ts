export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui"), "prettier-plugin-tailwindcss"],
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
};
