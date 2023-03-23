const express = require('express')
const router = express.Router()
const clientController = require('../controllers/client.controller')

router.get('/', clientController.all)
router.get('/:id', clientController.find)
router.post('/', clientController.create)
router.put('/', clientController.create)
router.post('/', clientController.create)

module.exports = router