/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: "#050505",
          card: "#121212",
          subtle: "#0D0D0D",
          elevated: "#1A1A1A",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F5D77F",
          dark: "#AA8222",
          glow: "rgba(212, 175, 55, 0.25)",
        },
        border: {
          subtle: "#222222",
          gold: "rgba(212, 175, 55, 0.3)",
        },
        txt: {
          primary: "#FFFFFF",
          secondary: "#A1A1AA",
          muted: "#71717A",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.3)',
        'gold-glow-lg': '0 0 45px -5px rgba(212, 175, 55, 0.5)',
        'glass': '0 10px 30px 0 rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
