import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/rajpreetjudge",
  plugins: [react()],
  root: './',
    build: {
        outDir: 'dist',
    },
    publicDir: 'public'
});

