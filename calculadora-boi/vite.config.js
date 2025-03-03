import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Se estiver falhando ao encontrar o backend, defina a base:
export default defineConfig({
  plugins: [react()],
  base: './',  // Garante que os assets sejam encontrados
});
