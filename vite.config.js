import { defineConfig } from 'vite';

export default defineConfig({
  base: '/test-task-10X/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    },
  },
});
