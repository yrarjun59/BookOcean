/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      myGreen: "#2CD680",
      white: "#ffffff",
      textColor: "#03314B",
      pinkColor: "#D90077",
      loginBackgroundImage: "url('./images/login-background.svg')"
    },
  },
  plugins: [],
};
