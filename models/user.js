'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Review, {
        foreignKey: "userId",
        as: "review5",
      });
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
        validate: {
          isEmail: {
            args: true,
            msg: 'Alamat email tidak valid',
          },
        },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 8,
        max:20,
        notNull: {
          msg: 'Username tidak boleh null', // Pesan kesalahan kustom jika null
        },
        notEmpty: {
          msg: 'Username tidak boleh kosong', // Pesan kesalahan kustom jika string kosong
        },
    },
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};