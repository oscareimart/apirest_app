const express = require('express')
const router = express.Router()
const itemController = require('../controllers/item.controller')
const { setParams } = require('../middlewares/paramsUrlDefault')

router.get('/', setParams, itemController.all)
router.get('/:id', itemController.find)
router.post('/', itemController.create)
router.put('/:id', itemController.update)
router.delete('/', itemController.remove)

module.exports = router