/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'nav-menu':{
          '0%':{transform:'scaleY(0)'},
          '80%':{transform:'scaleY(1.2)'},
          '100%':{transform:'scaleY(1)'},
        }
      },
      animation:{
        'nav-menu':'nav-menu 0.5s ease-in-out'
      },

      fontFamily:{
        'poppins':["'Poppins', 'sans-serif'"]
      }
    },
  },
  plugins: [],
}

