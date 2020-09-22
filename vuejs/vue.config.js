module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://nodejs-backend:3080',
          changeOrigin: true
        },
      }
    }
  }