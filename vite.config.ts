import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
      },
    },
  },
  server: {
    headers: {
      'Permissions-Policy': '',
    },
  },
});