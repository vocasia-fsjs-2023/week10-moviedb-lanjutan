const { Review } = require("../models/index");

const createReview = async (req, res) => {
  try {
    const { title, description, rating, movieId } = req.body;

    const review = await Review.create({
      title,
      description,
      rating,
      movieId,
      userId: req.user.id,
    });

    await review.reload({ include: "Movie" });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({ include: "Movie" });
    res.status(200).json({ reviews });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, rating } = req.body;

    const review = await Review.findOne({
      where: { id: id },
    });

    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    if (review.userId !== req.user.id) {
      return res.status(403).json({
        message: "user tidak punya akses data ini",
      });
    }

    review.title = title;
    review.description = description;
    review.rating = rating;

    await review.save();
    return res.status(200).json(review);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findOne({ id: id });

    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }

    if (review.userId !== req.user.id) {
      return res.status(403).json({
        message: "user tidak punya akses data ini",
      });
    }

    await review.destroy();

    return res
      .status(200)
      .json({ message: "Review dengan id " + id + " telah dihapus" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createReview,
  getAllReviews,
  updateReview,
  deleteReview,
};
