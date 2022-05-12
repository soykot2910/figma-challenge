module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        xl: "0rem",
      },
      center: true,
      screens: {
        default: "100%",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1170px",
        "2xl": "1370px",
      },
    },
    extend: {
      boxShadow: {
        btn: "0px 1px 5px rgba(0, 0, 0, 0.12), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 0px rgba(0, 0, 0, 0.14)",
        blogBox:"0px 8px 14px rgba(187, 187, 187, 0.15)"
      },
      colors: {
        main: "#215A51",
        gray: "#5E5E5E",
        bgBack: "#F9F9F9",
      },
    },
  },
  plugins: [],
};
