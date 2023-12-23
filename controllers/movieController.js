const { Movie, Review } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const { title, description } = req.body;
      if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
      }
      const movie = await Movie.create({ title, description });
      res.status(201).json(movie);
    } catch (err) {
      res.status(500).json({message: 'Internal server error' });
    }
  },
  async findAll(req, res) {
    try {
      const movies = await Movie.findAll({
        include: [{ model: Review, as: 'reviews' }],
      });
      res.status(200).json(movies);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  async findById(req, res) {
    try {
      const movie = await Movie.findByPk(req.params.id, {
        include: [{ model: Review, as: 'reviews' }],
      });
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  async update(req, res) {
    try {
      const movie = await Movie.findByPk(req.params.id);
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      const { title, description } = req.body;
      if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
      }
      movie.title = title;
      movie.description = description;
      await movie.save();
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  async delete(req, res) {
    try {
      const movie = await Movie.findByPk(req.params.id);
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      await movie.destroy();
      res.status(200).json({ message: 'Movie deleted' });
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};
