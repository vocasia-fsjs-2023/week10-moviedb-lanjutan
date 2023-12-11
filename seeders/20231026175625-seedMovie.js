'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
     * 
    */
     await queryInterface.bulkInsert('movies',
      [
        {
          title: 'INCEPTION',
          description: "Cobb, mata-mata ahli, mencuri informasi dari targetnya dengan masuk ke dalam mimpi mereka. Ia diburu atas pembunuhan istrinya, dan satu-satunya cara untuk menebus semua ini, adalah degan Inception.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'SPIDERMAN',
          description: " Peter Parker, remaja yatim piatu yang tinggal bersama bibi dan pamannya, tak sengaja digigit laba-laba modifikasi genetika beracun mematikan. Namun, kekuatan luar biasa justru muncul dalam dirinya.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'INTERSTELLAR',
          description: " Sebuah tim penjelajah antar galaksi harus melewati lubang cacing dan terjebak di dimensi waktu ruang angkasa dalam upaya untuk menjamin kelangsungan hidup umat manusia di planet bumi.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'THE MATRIX',
          description: "Thomas, seorang programer komputer dan hacker jahat, dipimpin untuk melawan perang bawah tanah melawan komputer kuat yang kini menguasai dunia dengan sistem yang disebut 'The Matrix'.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'THREE IDIOTS',
          description: "Di kampus, Farhan dan Raju terlihat sangat akrab dengan Rancho. Bertahun-tahun kemudian, sebuah taruhan akhirnya memberi mereka kesempatan untuk mencari kembali teman yang telah lama hilang.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     * 
     */
    await queryInterface.bulkDelete('movies', null, {});
  }
};
