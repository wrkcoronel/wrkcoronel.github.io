import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Mantém os assets funcionando em páginas de projeto do GitHub Pages.
  base: './',
})
