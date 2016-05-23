// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, '../public/index.html'),
    admin: path.resolve(__dirname, '../public/admin.html'),
    assetsRoot: path.resolve(__dirname, '../public'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true
  },
  dev: {
    port: 8080,
    proxyTable: {
      '/api': {
        target: 'http://vuejs-laravel',
        changeOrigin: true,
        pathRewrite: {
        }
      }
    }
  }
}
