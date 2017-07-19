var client = require('./client').client


function getBrands(query) {
    query = query || {}

    query.content_type = 'brands'
    // query.order = 'fields.name'


    return client.getEntries(query)
}

module.exports = {
    getBrands
}
