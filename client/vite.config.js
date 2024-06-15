import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: [
        'slick-carousel/slick/slick.css',
        'slick-carousel/slick/slick-theme.css'
      ],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  server: {
    fs: {
      allow: [
        '..', // Allow serving files from the parent directory
        './', // Allow serving files from the current directory
        'node_modules/slick-carousel/slick' // Allow serving files from slick-carousel's directory
      ]
    }
  }
});
