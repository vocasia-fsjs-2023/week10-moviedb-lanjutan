/* VERSI BAWAAN */
// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Movie extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Movie.init({
//     id: DataTypes.INTEGER,
//     title: DataTypes.STRING,
//     description: DataTypes.TEXT,
//     createdAt: DataTypes.DATE,
//     updatedAt: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'Movie',
//   });
//   return Movie;
// };

/* Versi 1 */
// models/movie.js
const { DataTypes } = require('sequelize');
const db = require('../config/config.json');
const Review = require('./review'); // Import model Review

const Movie = db.define('Movie', {
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
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Movie.hasMany(Review, {
  foreignKey: 'movieId',
  as: 'reviews', // Nama association untuk eager loading
});

module.exports = Movie;
