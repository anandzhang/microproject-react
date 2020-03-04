const { createProxyMiddleware } = require('http-proxy-middleware')
const baseUrl = 'https://movie.douban.com/'

module.exports = function (app) {
  app.use(createProxyMiddleware("/api", {
    target: baseUrl,
    changeOrigin: true,
    pathRewrite: {
      "/api": "/"
    }
  }))
}