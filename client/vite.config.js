import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    // Add other plugins as needed
  ],
  build: {
    chunkSizeWarningLimit: 1000, // Example: increase limit to 1000 kB (1 MB)
    rollupOptions: {
      external: [
        'slick-carousel/slick/slick.css'
      ],
      output: {
        manualChunks(id) {
          // Example: group large dependencies or chunks manually
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
});
