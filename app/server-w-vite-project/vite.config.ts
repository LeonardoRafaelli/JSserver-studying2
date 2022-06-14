import { defineConfig, ProxyOptions } from 'vite'
import react from '@vitejs/plugin-react'

  const PFX = ''
  const PFX_PASSPHRASE = ''
  const SERVER_URL = 'http://localhost:3000'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    open: true,
    proxy: {
      '^/api/.*': {
        target: SERVER_URL,
        changeOrigin: true,
        secure: false,
        rewrite: path => {
          console.log(path, path.replace(/^\/api/, ''));
          return path
        },
        ssl: {
          pfx: PFX,
          passphrase: PFX_PASSPHRASE
        }
      }
    }
  },
  plugins: [react()]
})
