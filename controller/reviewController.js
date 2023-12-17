// controllers/reviewController.js
const { Movie, Review, User } = require('../models');

exports.createReview = async (req, res) => {
  try {
    const { title, description, rating, movieId } = req.body;

    // Cek apakah user punya akses ke data movie yang direview
    const movie = await Movie.findByPk(movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie tidak ditemukan' });
    }

    // Cek apakah user punya akses ke data ini
    if (movie.UserId !== req.user.id) {
      return res.status(403).json({ message: 'User tidak punya akses data ini' });
    }

    const review = await Review.create({
      title,
      description,
      rating,
      movieId,
      userId: req.user.id,
    });

    res.status(201).json({ review, Movie: movie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
};

// Implementasi endpoint lainnya (getReviews, updateReview, deleteReview) sesuai kebutuhan
exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);

    if (!review) {
      return res.status(404).json({ message: 'Review tidak ditemukan' });
    }

    // Cek apakah user punya akses ke data ini
    if (review.userId !== req.user.id) {
      return res.status(403).json({ message: 'User tidak punya akses data ini' });
    }

    const updatedReview = await review.update(req.body);

    res.status(200).json(updatedReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);

    if (!review) {
      return res.status(404).json({ message: 'Review tidak ditemukan' });
    }

    // Cek apakah user punya akses ke data ini
    if (review.userId !== req.user.id) {
      return res.status(403).json({ message: 'User tidak punya akses data ini' });
    }

    await review.destroy();

    res.status(200).json({ message: `Review dengan id ${req.params.id} telah dihapus` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
};