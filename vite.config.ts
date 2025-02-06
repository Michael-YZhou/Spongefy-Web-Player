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
});
