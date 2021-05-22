const router = require('express').Router()
const controller = require('../controllers')

router.get('/', controller.productController.getAll) // get All
router.post('/', controller.productController.create) // Add one
router.delete('/', controller.productController.deleteAll) // delete all
router.put('/:_id', controller.productController.update) // update one
router.get('/:_id', controller.productController.getOne) // get one
router.delete('/:_id', controller.productController.deleteOne) // delete one



module.exports = router