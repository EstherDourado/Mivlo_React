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
      },
      colors: {
        brand: {
          graphite: '#1b013b',
          amber: '#b06ab3',
          amber2: '#4568dc',
          sand: '#e0dced',
          pure: '#ffffff',
          muted: '#2a1856',
          border: 'rgba(224, 220, 237, 0.15)'
        }
      }
    }
  },
  plugins: [],
}
