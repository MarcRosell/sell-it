const express = require('express')
const router = express.Router()
const getProducts = require('./handlers/getProducts')

router.get('/products', getProducts)

module.exports = router
