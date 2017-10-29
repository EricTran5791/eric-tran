const config = require('./config');

'use strict'
module.exports = {
  NODE_ENV: '"production"',
  GITHUB_TOKEN: `"${config.GITHUB_TOKEN}"`
}
