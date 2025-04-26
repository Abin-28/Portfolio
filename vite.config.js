import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}); 