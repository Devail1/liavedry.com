export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
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
  plugins: [require("daisyui"), require("@tailwindcss/typography"), "prettier-plugin-tailwindcss"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes").light,
          primary: "#2563eb",
          ".text-title": {
            color: "#141414",
          },
          ".text-subtitle": {
            color: "#1f2937",
          },
          ".btn-md": {
            height: "2rem",
            minHeight: "2rem",
          },
          ".btn-circle": {
            height: "2.5rem",
            width: "2.5rem",
          },
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes").dark,
          "base-content": "#dddeee",
          ".text-title": {
            color: "#f5f5f5",
          },
          ".text-subtitle": {
            color: "#a6adbb",
          },
          ".btn-md": {
            height: "2rem",
            minHeight: "2rem",
          },
          ".btn-circle": {
            height: "2.5rem",
            width: "2.5rem",
          },
        },
      },
    ],
  },
};
