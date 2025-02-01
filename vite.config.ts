import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



// https://vite.dev/config/
export default defineConfig({
  build: {
    assetsDir: 'src/assets', // Ensure PNG files are handled as assets
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
