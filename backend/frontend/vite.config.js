import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3050, //current backend port
    proxy: {
      "/api": {
        target: "https://prepmonk-five.vercel.app/", //localhost new port
        changeOrigin: true,
      },
    },
  },
})
