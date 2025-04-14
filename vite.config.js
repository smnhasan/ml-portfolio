import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Update this to your GitHub repo name for proper deployment
const base = process.env.NODE_ENV === 'production' ? '/ml-portfolio/' : '/';

export default defineConfig({
  plugins: [react()],
  base: base
});