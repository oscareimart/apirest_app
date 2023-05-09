const express = require('express')
const router = express.Router()
const saleController = require('../controllers/sale.controller')
const { setParams } = require('../middlewares/paramsUrlDefault')

router.get('/', setParams, saleController.all)
router.get('/:id', saleController.find)
router.post('/', saleController.create)
router.put('/:id', saleController.update)
router.delete('/', saleController.remove)

module.exports = router