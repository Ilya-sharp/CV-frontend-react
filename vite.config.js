import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://Ilya-sharp.github.io/CV-frontend-react',
  plugins: [react()],
})
