const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...{},
    ...this.options['nuxt-static'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-static.js',
    options
  })
}

module.exports.meta = require('../package.json')
