import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@features": path.resolve('src/features/'),
      "@services": path.resolve('src/services/'),
      "@store": path.resolve('src/store/'),
      "@pages": path.resolve('src/pages/'),
      "@utils": path.resolve('src/utils/'),
      "@src": path.resolve('src/'),
      "@assets": path.resolve('src/assets/'),
      "@lib": path.resolve('src/lib/'),
      "@ui": path.resolve('src/components/ui/'),
    },
  },
})
