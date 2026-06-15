import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/CSA-Website-2026/',
  plugins: [react()],
});