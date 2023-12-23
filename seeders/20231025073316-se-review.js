'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews',
    [
      {
        title:'Sounds of Freedom',
        description:'Film mengisahkan seorang yang ingin kebebasan',
        rating:5,
        movieId:1,
        userId:1,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});

  }
};
