import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    disableHostCheck: true, // ← ← ← ← ← ←
    host: '0.0.0.0', // ← 新增内容 ←
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
    // hmr: false
  }
})
