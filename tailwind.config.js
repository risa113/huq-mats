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
          dark: "#0A0B0E",
          card: "#13151C",
          subtle: "#0F1117",
          elevated: "#1C1F28",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F3D379",
          dark: "#AA8222",
          glow: "rgba(212, 175, 55, 0.22)",
        },
        border: {
          subtle: "#202430",
          gold: "rgba(212, 175, 55, 0.25)",
        },
        txt: {
          primary: "#F8FAFC",
          secondary: "#94A3B8",
          muted: "#64748B",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.3)',
        'gold-glow-lg': '0 0 45px -5px rgba(212, 175, 55, 0.45)',
        'glass': '0 10px 30px 0 rgba(0, 0, 0, 0.5)',
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
