/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        'nav-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'success-message':{
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        'nav-menu': 'nav-menu 0.2s ease-in-out',
        'success-message': 'success-message 0.5s ease-out forwards'
      },

      fontFamily: {
        'poppins': ["'Poppins', 'sans-serif'"]
      },

    },
  },
  plugins: [],
}

