import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/PFSENTHOO/', // Correction du base
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
