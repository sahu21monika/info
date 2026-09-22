import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this site from /info/, Vercel serves it from the domain root.
  base: process.env.VERCEL ? '/' : '/info/',
})
