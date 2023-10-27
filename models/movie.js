"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            
            Movie.hasMany(models.Review, {foreignKey: "movieId"});
            Movie.hasMany(models.User, {foreignKey: "userId"})
        }
    }
    Movie.init(
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    max: 255,
                    notNull: true,
                },
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    max: 255,
                    notNull: true,
                },
            },
            userId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Movie",
        }
    );
    return Movie;
};