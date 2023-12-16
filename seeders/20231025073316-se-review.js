'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews',
    [
      {
        title:'jumanji',
        description:'film terbaik yang pernah saya tonton di bulan ini',
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
