const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
      "/v3",
      createProxyMiddleware({
         target: "https://openapi.map.naver.com",
        changeOrigin: true,
      })
    );
};
