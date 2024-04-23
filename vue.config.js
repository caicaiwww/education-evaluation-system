module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://172.20.13.12:8082', // 后端API服务器地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}