import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-nia-s-purpose-llc',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'nia-s-purpose-llc.html')
      }
    }
  },
  define: {
    // Hardcode backend URL for production
    'import.meta.env.VITE_BACKEND_URL': JSON.stringify(
      process.env.VITE_BACKEND_URL || 'https://unibox-backend-bc5a3bd47124.herokuapp.com'
    ),
    'import.meta.env.VITE_API_BASE_URL': JSON.stringify(
      process.env.VITE_API_BASE_URL || 'https://unibox-backend-bc5a3bd47124.herokuapp.com'
    )
  }
})
