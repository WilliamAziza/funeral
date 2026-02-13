const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

// https://vite.dev/config/
module.exports = defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
})
