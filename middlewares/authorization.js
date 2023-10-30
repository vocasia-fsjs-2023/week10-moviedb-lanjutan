const { review } = require("../models");

async function isUserOwnReview(req, res, next) {
  try {
    const userId = req.userId;
    const param = req.params;
    const reviewId = param.id;

    const reviews = await review.findOne({ where: { id: reviewId } });

    if (reviews && reviews.userId === userId) {
      next();
    } else {
      throw new Error(
        "REVIEW INI BUKAN MILIK ANDA / REVIEW INI TIDAK DITEMUKAN"
      );
    }
  } catch (error) {
    next(error);
  }
}

module.exports = isUserOwnReview;
