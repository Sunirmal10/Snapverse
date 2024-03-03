/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '320px', // min-width: 320
      'xms': '375px',
      'xs': '425px', 
      'sm': '640px', 
      'md': '768px', 
      'lg': '1024px', 
      'xl': '1280px', 
      '2xl': '1536px', 
   
  
    },
    extend: {},
  },
  plugins: [],
}


