const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  // 使用反向代理到豆瓣，避开跨域问题
  app.use(createProxyMiddleware("/api", {
    target: "https://movie.douban.com/",
    changeOrigin: true,
    pathRewrite: {
      "/api": "/"
    }
  }))
}