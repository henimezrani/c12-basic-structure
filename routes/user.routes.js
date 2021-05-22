const router = require('express').Router()
const controller = require('../controllers')

router.get('/', controller.userController.getAll) // get All
router.post('/', controller.userController.create) // Add one
router.delete('/', controller.userController.deleteAll) // delete all
router.put('/:_id', controller.userController.update) // update one
router.get('/:_id', controller.userController.getOne) // get one
router.delete('/:_id', controller.userController.deleteOne) // delete one



module.exports = router