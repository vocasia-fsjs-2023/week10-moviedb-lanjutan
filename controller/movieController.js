// controllers/movieController.js
const { Movie, Review, User } = require('../models');

exports.createMovie = async (req, res) => {
  try {
    // Pastikan hanya admin yang bisa membuat movie
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Akses hanya untuk user admin' });
    }

    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
};

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.status(200).json({ movies });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
};

// Implementasi endpoint lainnya (getMovieById, updateMovie, deleteMovie) sesuai kebutuhan
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id, {
      include: [{ model: Review, as: 'reviews' }],
    });

    if (!movie) {
      return res.status(404).json({ message: 'Movie tidak ditemukan' });
    }

    res.status(200).json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    // Pastikan hanya admin yang bisa mengupdate movie
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Akses hanya untuk user admin' });
    }

    const movie = await Movie.findByPk(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: 'Movie tidak ditemukan' });
    }

    const updatedMovie = await movie.update(req.body);

    res.status(200).json(updatedMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    // Pastikan hanya admin yang bisa menghapus movie
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Akses hanya untuk user admin' });
    }

    const movie = await Movie.findByPk(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: 'Movie tidak ditemukan' });
    }

    // Hapus semua Review terkait
    await Review.destroy({ where: { movieId: movie.id } });

    // Hapus Movie
    await movie.destroy();

    res.status(200).json({ message: `Movie ${movie.title} telah dihapus` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }
};