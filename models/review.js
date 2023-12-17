/* VERSI BAWAAN */
// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Review extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Review.init({
//     id: DataTypes.INTEGER,
//     title: DataTypes.STRING,
//     description: DataTypes.TEXT,
//     rating: DataTypes.INTEGER,
//     movieId: DataTypes.INTEGER,
//     userId: DataTypes.INTEGER,
//     createdAt: DataTypes.DATE,
//     updatedAt: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'Review',
//   });
//   return Review;
// };

/* Versi 1 */
// models/review.js

const { DataTypes } = require('sequelize');
const db = require('../config/config.json');

// Import model Movie dan User
const Movie = require('./movie');
const User = require('./user');

const Review = db.define('Review', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 255],
      notNull: true,
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5,
      notNull: true,
    },
  },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Review.belongsTo(Movie, {
  foreignKey: 'movieId',
  as: 'movie', // Nama association untuk eager loading
  onDelete: 'CASCADE', // Hapus semua Review terkait ketika Movie dihapus
});

Review.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user', // Nama association untuk eager loading
});

module.exports = Review;
