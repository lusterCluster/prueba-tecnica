import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      '/api': {
        target: 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})