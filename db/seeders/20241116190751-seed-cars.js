'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cars', [
      {
        name: 'Toyota Avanza',
        tahun: 2020,
        noPlat: 'B 1234 XYZ',
        harga: 150000000,
        fotoMobil: 'https://example.com/foto/toyota-avanza.jpg',
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Honda Jazz',
        tahun: 2019,
        noPlat: 'B 5678 ABC',
        harga: 200000000,
        fotoMobil: 'https://example.com/foto/honda-jazz.jpg',
        createdBy: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mitsubishi Pajero',
        tahun: 2021,
        noPlat: 'B 9101 DEF',
        harga: 400000000,
        fotoMobil: 'https://example.com/foto/mitsubishi-pajero.jpg',
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cars', null, {});
  }
};