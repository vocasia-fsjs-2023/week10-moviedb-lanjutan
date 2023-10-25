
const express = require("express");
const reviewController = require("../controller/review-controller.js");
const { isUserOwnReviewAuth } = require("../middleware/authorization.js");
const { authUser } = require('../middleware/authentication.js');
const router = express.Router();


router.post('/review', authUser, reviewController.createNew);
router.get('/review', reviewController.getAll);
router.put('/review/:id', authUser, isUserOwnReviewAuth, reviewController.update);
router.delete('/review/:id', authUser, isUserOwnReviewAuth, reviewController.deleteData);




module.exports = router