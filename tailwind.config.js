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
          dark: "#F8FAFC",
          light: "#F8FAFC",
          card: "#FFFFFF",
          subtle: "#F1F5F9",
          elevated: "#FFFFFF",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F5D77F",
          dark: "#B48608",
          glow: "rgba(212, 175, 55, 0.25)",
        },
        border: {
          subtle: "#E2E8F0",
          gold: "rgba(212, 175, 55, 0.35)",
        },
        txt: {
          primary: "#0F172A",
          secondary: "#475569",
          muted: "#64748B",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 4px 20px -2px rgba(212, 175, 55, 0.3), 0 2px 6px rgba(15, 23, 42, 0.05)',
        'gold-glow-lg': '0 10px 30px -4px rgba(212, 175, 55, 0.45), 0 4px 12px rgba(15, 23, 42, 0.08)',
        'glass': '0 10px 30px 0 rgba(15, 23, 42, 0.06)',
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
