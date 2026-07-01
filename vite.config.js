import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = env.VITE_BASE_PATH || '/'

  return {
    base,
    plugins: [react(), tailwindcss()],
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) return

            if (id.includes('framer-motion')) return 'motion'
            if (id.includes('@emailjs')) return 'emailjs'
            if (id.includes('react-helmet-async')) return 'helmet'
            if (
              id.includes('react-router') ||
              id.includes('react-dom') ||
              id.includes('react/jsx-runtime')
            ) {
              return 'vendor'
            }
          },
        },
      },
    },
  }
})
