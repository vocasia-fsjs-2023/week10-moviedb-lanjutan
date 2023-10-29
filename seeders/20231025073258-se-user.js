'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users',[{
      name: "Lazuardy",
      email: "lazuardy@gmail.com",
      password:'12345678',
      isAdmin:true,
      createdAt : new Date(),
      updatedAt : new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
