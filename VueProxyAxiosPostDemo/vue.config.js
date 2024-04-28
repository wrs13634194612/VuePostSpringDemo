// vue.config.js
module.exports = {
  devServer: {
    port: 8081,
    proxy: {
      // '/other/path' don't be included in 'pluginOptions.proxy.context'.
      '/other/path': {
        target: 'http://192.168.0.188:5000',
        changeOrigin: true
      },
    },
  },
  pluginOptions: {
    proxy: {
      enabled: true,
      context: ['/api', '/oauth2', '/login', '/auth/conf'],
      options: {
        target: 'http://192.168.0.188:5000',
        secure: false,
        headers: {
          host: 'localhost:8081',
        },
      },
    },
  },
};
