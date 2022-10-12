module.exports = { 
    devServer: { 
      proxy: { 
        '/api': { 
          target: 'http://localhost:3000',
          changeOrigin: true, 
          pathRewrite: { 
            '^/api': ''
          } 
        } 
      } 
    },
    outputDir: '../../WEB_BE/backend/public',
  }