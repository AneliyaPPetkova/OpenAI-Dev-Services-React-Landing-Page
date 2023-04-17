import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/OpenAI-Dev-Services-React-Landing-Page/", // Needed for GitHub Pages deployment
})
