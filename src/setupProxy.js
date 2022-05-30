const { createProxyMiddleware } = require('http-proxy-middleware')
const bodyParser = require('body-parser')

/**
 *
 * @param {import('express').Application} app
 */
module.exports = function (app) {
  app.use(
    '/api-everscan',
    createProxyMiddleware({
      target: 'https://api.everscan.io',
      // pathRewrite: {
      //   '^/api-everscan/': '/',
      // },
      pathRewrite: (path, req) => {
        const newPath = path.replace('/api-everscan', '/v1')
        console.log(path, newPath)
        console.log(req.body)
        return newPath
      },
      // onProxyReq: function (request, rr) {
      //   console.log(rr.body)

      //   console.log(request)

      //   request.setHeader('origin', 'https://api.everscan.io')
      //   request.setHeader('Origin', 'https://api.everscan.io')
      // },
      changeOrigin: true,
    })
  )

  app.use(bodyParser.json())
  app.use(bodyParser.text())
  app.use(bodyParser.raw())
}
