import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/PFSENTHOO/', // ✅ Chemin correct pour GitHub Pages
  plugins: [react()],
});

