import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or remove if not using React

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow external access
    allowedHosts: [
      'spatially-decidable-sha.ngrok-free.dev'
    ]
  }
})