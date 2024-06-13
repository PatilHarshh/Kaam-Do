import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log("Vite configuration loaded");

export default defineConfig({
  plugins: [
    react(),
  ],
});
