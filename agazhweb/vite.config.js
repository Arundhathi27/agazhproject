import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://arundhathi27.github.io/agazhproject/',
      dynamicRoutes: [
        '/',
        '/aboutus'
      ],
      outDir: 'dist',
      robots: [{ userAgent: '*', allow: '/' }] // This also generates robots.txt in dist automatically
    })
  ],
  base: '/agazhproject/',
})

