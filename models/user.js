'use strict';
const { features } = require('process');
const {
  Model
} = require('sequelize');
const bcrypt = require("bcrypt");
const saltRound = 10;
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.review);
    }
  }
  user.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[8,20]
      }
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isEmail:true
      }
    },
    password: {
      type:DataTypes.TEXT,
      allowNull:false,
      validate:{
        len:[8,20]
      }
    },
    isAdmin: {
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:false
    },
  }, {
    sequelize,
    modelName: 'user',
    hooks: {
      beforeCreate(user, option) {
        user.password = bcrypt.hashSync(user.password, saltRound);
      },
    },
  });
  return user;
};