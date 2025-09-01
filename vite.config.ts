import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import yaml from 'vite-plugin-yaml';

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore - Resolves "not callable" TypeScript error with vite-plugin-yaml
  // @ts-ignore - Resolves TypeScript type error with vite-plugin-yaml
  // @ts-ignore - Resolves TypeScript type error with vite-plugin-yaml
  // @ts-ignore - Resolves TypeScript callable error for vite-plugin-yaml
  plugins: [react(), yaml()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
