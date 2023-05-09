const express = require('express')
const router = express.Router()

router.use('/clients', require('./client.routes'))
router.use('/sales', require('./sale.routes'))
router.use('/items', require('./item.routes'))

module.exports = router