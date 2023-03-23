const express = require('express')
const router = express.Router()

router.use('/client', require('./client.routes'))

module.exports = router