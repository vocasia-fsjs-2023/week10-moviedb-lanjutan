'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("movies", "userId" ,{
      type: DataTypes.INTEGER,
      references:{
        model: "Users",
        key: "id",
      },
    });
    await queryInterface.addColumn("reviews", "userId" ,{
      type: DataTypes.INTEGER,
      references:{
        model: "Users",
        key: "id",
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("movies", "userId");
    await queryInterface.removeColumn("reviews", "userId");
  }
};
