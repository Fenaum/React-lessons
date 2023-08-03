import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: './test/index.html', // default
      },
    },
  },
  plugins: [react()],
});
