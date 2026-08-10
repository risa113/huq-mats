import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use subpath base for GitHub Pages workflow, root '/' for Vercel/Netlify
  base: process.env.GITHUB_ACTIONS ? '/huq-mats/' : '/',
  server: {
    port: 3000,
    host: true,
  }
})
