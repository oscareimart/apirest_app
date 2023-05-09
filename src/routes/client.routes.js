const express = require('express')
const router = express.Router()
const clientController = require('../controllers/client.controller')
const { setParams } = require('../middlewares/paramsUrlDefault')

router.get('/', setParams, clientController.all)
router.get('/:id', clientController.find)
router.post('/', clientController.create)
router.put('/:id', clientController.update)
router.delete('/', clientController.remove)

module.exports = router