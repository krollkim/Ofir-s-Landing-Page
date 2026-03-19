import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5005,
    host: true,
    allowedHosts: ['192.168.1.83'],
  },
})
