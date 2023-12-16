const router = require('express').Router()
const {Movie}= require('../models')
const movieController = require('../controllers/movie')
const authMiddleware = require('../middlewares/auth')
const authorizationMiddleware = require('../middlewares/authorization')

router.get('/', movieController.findAll)
router.get('/:id', movieController.findById)

router.post('/',
 authMiddleware,
 authorizationMiddleware(['admin']),
 movieController.create)

router.put('/:id',
 authMiddleware,
 authorizationMiddleware(['admin']),
 movieController.update)

router.delete('/:id',
 authorizationMiddleware(['owner','admin']),
 movieController.delete)

module.exports = router