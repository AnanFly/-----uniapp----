import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    viteMockServe({
      mockPath: "./mock"
    })
  ],
  transpileDependencies: ['uview-plus'],
  server: {
    port: 8085,
    proxy: {
      '/api': {
        target: 'http://localhost:8085',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/uni_theme.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "~": path.resolve(__dirname, "src/pages"),
    },
  },
})
