/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#5271FF",
        dark_gray: "#565656",
      },
      fontFamily: {
        "gilroy-bold": ['"Gilroy-Bold ☞"', "sans-serif"],
        "gilroy-heavy": ['"Gilroy-Heavy ☞"', "sans-serif"],
        "gilroy-light": ['"Gilroy-Light ☞"', "sans-serif"],
        "gilroy-medium": ['"Gilroy-Medium ☞"', "sans-serif"],
        "gilroy-regular": ['"Gilroy-Regular ☞"', "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
        "linear-gradient(90deg, #5271FF 22.01%, #FFFFFF 100%)",
        "custom-gradient-v2":
        "linear-gradient(90deg, #5271FF 22.01%, #9db2e0 100%)",
        'bg-meet-hira': 'linear-gradient(180deg, #5271FF 60%, #FFFFFF 100%)',
      },
      boxShadow: {
        "shadow-custom": "0px 0px 0px 0px #00000014",
        'custom': '0px 4px 4px 0px #00000040',

      },
      borderRadius: {
        'custom': '20px 20px 0px 20px',
        'custom1': '20px 20px 20px 0px',
      },
      textShadow: {
        custom: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      screens: {
        'xs': '480px',  
        'sm': '640px',  
        'md': '768px',  
        'lg': '1024px',  
        'xlg': '1200px',  
        'xl': '1280px', 
        '2xl': '1536px' 
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-custom": {
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
