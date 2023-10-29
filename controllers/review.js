const { Review } = require('../models/review')


module.exports = {

  async create(req, res) {
    try {
      const review = await Review.create(req.body)
      res.status(201).json(review)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  async findAll(req, res) {
    const reviews = await Review.findAll({
      include: [
        {
          model: Movie,
          as: 'movie'
        }
      ]
    })
  
  },
  async findById(req, res) {
    const review = await Review.findByPk(req.params.id, {
      include: [
        {
          model: Movie,
          as: 'movie' 
        }
      ]
    })
  
  },

  async update(req, res) {
   try {
     const review = await Review.findByPk(req.params.id)
     if(!review) {
       return res.status(404).json({message: 'Review not found'})
     }
     await review.update(req.body)
     res.status(200).json(review)
   } catch (err) {
    res.status(500).json(err)
   }
  },

  async delete(req, res) {
    try {
      const review = await Review.findByPk(req.params.id)
      if(!review) {
        return res.status(404).json({message: 'Review not found'})
      }
      await review.destroy()
      res.status(200).json({message: 'Review deleted'})
    } catch (err) {
      res.status(500).json(err) 
    }
  }

}