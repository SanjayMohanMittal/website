import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// Site URL used for absolute meta tags (og:image, og:url, twitter:image) in
// index.html via the %VITE_SITE_URL% placeholder. On Vercel, VERCEL_URL is
// the actual per-deployment URL (different for every preview build), so
// preview links shared for review get a working share-preview image
// instead of one pointing at production. Production still resolves to the
// real domain. Falls back to the production domain for local dev, since
// there's no meaningful public URL to use there anyway.
const SITE_URL =
  process.env.VERCEL_ENV === 'production'
    ? 'https://sanjaymohanmittal.com'
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'https://sanjaymohanmittal.com'
process.env.VITE_SITE_URL = SITE_URL

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3001,
  },
})
