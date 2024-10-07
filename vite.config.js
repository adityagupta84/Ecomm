import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for the build
    emptyOutDir: true, // Ensure dist is emptied before each build
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Updated path to index.html in the root
      },
    },
  },
});
