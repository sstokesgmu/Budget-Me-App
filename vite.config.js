import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: './output',  // Serve the source files from the 'src' directory
  build: {
    outDir: './output',  // Build files into the 'dist' directory (relative to the root)
  },
  plugins: [react()],
})
