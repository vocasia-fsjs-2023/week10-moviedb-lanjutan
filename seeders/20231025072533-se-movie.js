'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', 
[
  {
    title: 'Jumanji',
    description: 'Masuk dalam dunia game dan harus menyelesaikan game melalui beberapa tantangan untuk keluar dari dunia game',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'One Piece',
    description: 'Petualangan Seorang Bajak laut dan beberapa kru nya yang ingin menjadi raja bajak laut',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Money Heist',
    description: 'Skenario perampokan besar bank di spanyol dari sekelompok pencuri',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'KKN di desa penari 2',
    description: 'Film yang di angkat dari kisah nyata tentang sekelompok mahasiswa yg sedan KKN namun mendapat gangguan dari mahkluk gaib',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'The Avengers',
    description: 'Pertarungan beberapa super hero yang berkumpul menjadi satu untuk melawan thanos yang ingin menghancurkan semesta',
    createdAt: new Date(),
    updatedAt: new Date()
  }
], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
  }
};
