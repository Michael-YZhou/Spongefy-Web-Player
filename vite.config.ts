import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // for vite to recognize the @ alias
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // for vite to recognize less files
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // Some LESS libraries (like Ant Design) need this.
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://codercba.com:9002', // backend URL to forward requests to
        changeOrigin: true, // Avoid host header issues
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove `/api` prefix before forwarding
      },
    },
  },
});
