const router = require('express').Router()
const reviewController = require('../controllers/reviewController')
const authMiddleware = require('../middlewares/auth')
const authorizationMiddleware = require('../middlewares/authorization') 

router.get('/', reviewController.findAll) 

router.get('/:id', reviewController.findById)

router.post('/', 
  authMiddleware,
  reviewController.create) 
  
router.put('/:id', 
  authMiddleware,
  authorizationMiddleware(['owner', 'admin']), 
  reviewController.update)

router.delete('/:id', 
  authMiddleware,
  authorizationMiddleware(['owner', 'admin']),
  reviewController.delete)

module.exports = router