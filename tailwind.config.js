/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'customblack':"#0F172A",
        'customgray':"#1E293B",
        'customviolet':"#6366F1",
        'customblue':"#A5B4FC"
        
       }
    },
  },
  plugins: [],
}