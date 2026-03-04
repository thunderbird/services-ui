import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue({
      // Turn .vue imports into CustomElement constructors
      customElement: true,
    }),
    dts({
      tsconfigPath: './tsconfig.app.json',
      rollupTypes: true,
    }),
  ],
  define: {
    // JSON.stringify() is necessary.
    // Without it, you'll get the following error:
    // "Uncaught ReferenceError: production is not defined"
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    emptyOutDir: false, // Keep standard build files
    lib: {
      entry: resolve(__dirname, 'src/index.ce.ts'),
      name: 'BoltWeb',
      fileName: 'boltweb',
      formats: ['iife'], // Serve Web Components as ES modules
    },
    outDir: 'dist',
  },
});
