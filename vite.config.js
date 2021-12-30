import { createVuePlugin } from 'vite-plugin-vue2'

export default {
  plugins: [createVuePlugin()],
  server: {
    proxy: {
      '/yearsummary': {
        target: 'url.to.backend',
        changeOrigin: true
      }
    }
  },
  build: {
    cssTarget: 'chrome61'
  }
}
