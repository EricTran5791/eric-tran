'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: {
    scss: 'vue-style-loader!css-loader!sass-loader?data=@import "./src/scss/variables";',
  },
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
