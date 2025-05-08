import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/med2care-demo/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
})
