/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ias: {
          blue: {
            900: '#060B19',
            800: '#0A132D',
            700: '#112250',
            600: '#1D3B89',
          },
          gold: {
            500: '#D4AF37',
            400: '#E4C96A',
            300: '#F1E19E',
          },
          dark: '#03050B',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(110deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'glass-hover': 'linear-gradient(110deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.5)',
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.4)',
        'glow-blue': '0 0 20px rgba(29, 59, 137, 0.4)',
      },
    },
  },
  plugins: [],
}
