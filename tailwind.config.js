/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        signature: ['Caveat', 'cursive'],
        script: ['"Alex Brush"', 'cursive'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      colors: {
        brand: {
          black: '#08070D',
          'black-soft': '#100D18',
          'purple-deep': '#1B0A32',
          purple: '#6128C8',
          'purple-light': '#9557F5',
          'purple-glow': '#B99AFF',
          white: '#FFFFFF',
          'white-soft': '#F6F4FA',
          'gray-light': '#E5E0EB',
          'gray-text': '#B9B2C5',
          'gray-dark': '#393340',

          // Compatibility aliases
          graphite: '#100D18',
          amber: '#6128C8',
          amber2: '#9557F5',
          sand: '#B9B2C5',
          pure: '#FFFFFF',
          muted: '#1B0A32',
          border: 'rgba(229, 224, 235, 0.12)'
        }
      }
    }
  },
  plugins: [],
}
