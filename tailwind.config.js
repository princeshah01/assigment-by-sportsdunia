/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px', 
      'sm': '768px', 
      'md': '820px', 
      'lg': '1024px', // Default large breakpoint
        'xl': '1280px', // Default extra-large breakpoint
        '2xl': '1536px', // Default 2x extra-large breakpoint
        '3xl': '1600px',
      },
      colors: {
        'dark-text': '#c8c8c8',   
        'dark-back': '#000',  
        'dark-fore': '#1f1f1f', 
        'dark-uni': '#b982f8',
        'light-text': '#1f1f1f',   
        'light-back': '#f3f3f3',  
        'light-fore': '#ffffff', 
        'light-uni': '#458ac6',
        "warning-bg":"	#ff4545",
        "sucess-bg":"#8fce00",
      },
      
    extend: {
      fontFamily:{
        quickSand : ["Quicksand", "san-serif"]
      }
    },
  },
  plugins: [],
  darkMode:"class",
};