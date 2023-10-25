
const express = require("express");
const movieController = require("../controller/movie-controller.js");
const { isAdmin } = require("../middleware/authorization.js");
const { authUser } = require('../middleware/authentication.js');
const router = express.Router();


router.post('/movie', authUser, isAdmin, movieController.createNew); 
router.get('/movie', movieController.getAll);
router.get('/movie/:id', movieController.getById);
router.put('/movie/:id', authUser, isAdmin, movieController.update);
router.patch('/movie/:id', authUser, isAdmin, movieController.updateStatus);
router.delete('/movie/:id', authUser, isAdmin, movieController.deleteData);




module.exports = router