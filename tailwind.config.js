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
          dark: "#080808",
          card: "#171717",
          subtle: "#111111",
          elevated: "#1E1E1E",
        },
        gold: {
          DEFAULT: "#C9A45C",
          light: "#E6C982",
          dark: "#9A7B39",
          glow: "rgba(201, 164, 92, 0.15)",
        },
        border: {
          subtle: "#262626",
          gold: "rgba(201, 164, 92, 0.25)",
        },
        txt: {
          primary: "#FFFFFF",
          secondary: "#B8B8B8",
          muted: "#737373",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(201, 164, 92, 0.2)',
        'gold-glow-lg': '0 0 40px -10px rgba(201, 164, 92, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
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
