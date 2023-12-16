'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Review,{foreignKey:"userId", as: 'reviews'})
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail: true,
      }
    },
    password: {
      type:DataTypes.TEXT,
      allowNull:false,
      validate:{
        notEmpty:true,
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
    modelName: 'User',
  });

  User.addHook("beforeSave", async(user)=>{
    if(user.password){
      user.password=await bcrypt.hash(user.password, 10);
    }
  })

  return User;
};