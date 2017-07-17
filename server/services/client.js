var contentful = require('contentful')
var config = require('../config').config

var client = contentful.createClient({
  accessToken: config.accessToken,
  space: config.space
})

exports.client = client