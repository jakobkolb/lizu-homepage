const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const path = require('path')

module.exports = withPlugins([[withImages]], {
  webpack(config, { isServer }) {
    config.resolve.modules.push(path.resolve('./'))
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  },
  target: "serverless",
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de'
  },
  distDir: 'build',
})
