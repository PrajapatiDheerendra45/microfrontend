import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure Netlify serves from 'dist'
  },
  server: {
    port: 3000, // Change port based on app (Host: 3000, Chat: 3001, Email: 3002)
  },
  base: "./", // Ensure relative paths for Netlify


});
