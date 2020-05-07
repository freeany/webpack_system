const dev = require('./webpack.dev.js')
const prod = require('./webpack.prod.js')

const TARGET = process.env.npm_lifecycle_event
if (TARGET === 'dev') {
  module.exports = dev
}

if (TARGET === 'prod') {
  module.exports = prod
}
