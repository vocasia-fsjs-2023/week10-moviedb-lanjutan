const { review, user } = require("../models");

class Controller {
  static async addReview(req, res, next) {
    const { title, description, rating, movieId } = req.body;
    const userId = req.userId;
    const users = await user.findOne({ where: { id: userId } });

    if (users) {
      try {
        const reviews = await review.create({
          title,
          description,
          rating,
          movieId,
          userId,
        });
        res.status(201).json(reviews);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(500).json(error);
    }
  }
  static async getReview(req, res, next) {
    try {
      const reviews = await review.findAll({ include: user });
      res.status(200).json(reviews);
    } catch (error) {
      res.status(200).json(error);
    }
  }
  static async updateReview(req, res, next) {
    const { title, description, rating } = req.body;
    let id = Number(req.params["id"]);
    try {
      await review.update(
        {
          title,
          description,
          rating,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(200).json(`Review dengan id ${id} berhasil diupdate`);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async deleteReview(req, res, next) {
    let id = Number(req.params["id"]);
    await review.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json(`Review dengan id ${id} berhasil dihapus`);
  }
}

module.exports = Controller;
