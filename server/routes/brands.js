var express = require('express')
// var brands = require('../services/brands')
var router = express.Router()

var brands = require('../services/brands')

/* router params */
router.use(function (req, res, next) {

    brands.getBrands().then(function (brandsCollection) {

        req.brands = brandsCollection.items
        next()
    })

})

router.get('/', function (req, res, next) {

    res.send({
        'title': 'Brands',
        'brands': req.brands
    })

})

module.exports = router