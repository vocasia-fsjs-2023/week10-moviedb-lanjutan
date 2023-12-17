// routes/index.js
const express = require('express');
const router = express.Router();
const movieController = require('../controller/movieController');
const reviewController = require('../controller/reviewController');
const authController = require('../controller/authController');
const authMiddleware = require('../middleware/authMiddleware');

// CRUD Movie
router.post('/movie', authMiddleware.authenticateUser, authMiddleware.authorizeAdmin, movieController.createMovie);
router.get('/movie', movieController.getMovies);
router.get('/movie/:id', movieController.getMovieById);
router.put('/movie/:id', authMiddleware.authenticateUser, authMiddleware.authorizeAdmin, movieController.updateMovie);
router.delete('/movie/:id', authMiddleware.authenticateUser, authMiddleware.authorizeAdmin, movieController.deleteMovie);

// CRUD Review
router.post('/review', authMiddleware.authenticateUser, reviewController.createReview);
router.get('/review', reviewController.getReviews);
router.put('/review/:id', authMiddleware.authenticateUser, reviewController.updateReview);
router.delete('/review/:id', authMiddleware.authenticateUser, reviewController.deleteReview);

// CRUD Auth
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

module.exports = router;
