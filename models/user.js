/* VERSI BAWAAN */
// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     id: DataTypes.INTEGER,
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.TEXT,
//     isAdmin: DataTypes.BOOLEAN,
//     createdAt: DataTypes.DATE,
//     updatedAt: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };

/* Versi 1 */
// models/user.js

const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Review = require('./review'); // Import model Review

const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
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
        msg: 'Invalid email format',
      },
    },
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [8, 20],
      notNull: true,
      notEmpty: true,
    },
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
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

User.hasMany(Review, {
  foreignKey: 'userId',
  as: 'reviews', // Nama association untuk eager loading
});

module.exports = User;
