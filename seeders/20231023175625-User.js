"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    
    const hashpass = await bcrypt.hash("12345678", 10);
    await queryInterface.bulkInsert(
      "users",
      [
        +{
          name: "Izzuddin AlFatah",
          email: "izzuddinalfatah33@gmail.com",
          password: hashpass,
          isadmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete("users", null, {});
  },
};
