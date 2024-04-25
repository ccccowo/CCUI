import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: './src/components/index.js',
      name: 'ccowo-ui'
    },
    // 不将vue代码打包进我们的组件库代码中
    rollupOptions: {
      external: ['vue']
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
