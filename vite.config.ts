import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  base: '/advent-of-code-2025/',
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
  },
})
