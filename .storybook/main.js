const path = require('path')

console.log(__dirname)

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules']
    config.resolve.extensions.push('.jsx')
    console.log(config.resolve.modules)

    return config
  },
  addons: ['@storybook/addon-links', '@storybook/addon-essentials']
}
