const withImages = require('next-images')
module.exports = withImages({
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://restless-heart-7405.on.fleek.co' : '',
})