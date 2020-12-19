const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
const path = require('path')

module.exports = withPlugins([[withSass], [withImages]], {
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
    locales: ['de', 'en', 'de-simple', 'en-simple'],
    defaultLocale: 'de'
  },
  distDir: 'build',
})
