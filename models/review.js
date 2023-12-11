'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      review.belongsTo(models.movie);
      review.belongsTo(models.user);
    }
  }
  review.init({
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1,255]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min:1,
        max:5
      }
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "movies",
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "movies",
        key: "users",
      },
    },
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};