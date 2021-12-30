import { createVuePlugin } from 'vite-plugin-vue2'

export default {
  plugins: [createVuePlugin()],
  server: {
    proxy: {
      '/yearsummary': {
        target: 'http://dev.kunlunerp.cn:8080',
        changeOrigin: true
      }
    }
  },
  build: {
    cssTarget: 'chrome61'
  }
}