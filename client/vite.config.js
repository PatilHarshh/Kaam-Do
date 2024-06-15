import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    // Add other plugins as needed
  ],
  build: {
    rollupOptions: {
      external: [
      'slick-carousel/slick/slick.css'
      ]
      }
  }
});
