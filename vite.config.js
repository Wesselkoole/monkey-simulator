import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/monkey-simulator/',
  plugins: [react()],
});
