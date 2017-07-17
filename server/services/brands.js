var client = require('./client').client


function getBrands(query) {
    query = query || {}
    query.content_type = 'brands'
    return client.getEntries(query)
}

module.exports = {
    getBrands
}
