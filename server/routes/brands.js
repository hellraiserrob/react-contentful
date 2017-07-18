var express = require('express')
// var brands = require('../services/brands')
var router = express.Router()

var brands = require('../services/brands')

/* router params */
router.use(function (req, res, next) {

    let params = req.query

    brands.getBrands(params).then(function (brandsCollection) {
        req.brands = brandsCollection.items
        next()
    })

})


router.get('/:sort?', function (req, res, next) {

    res.send({
        'title': 'Brands',
        'brands': req.brands
    })

})

module.exports = router