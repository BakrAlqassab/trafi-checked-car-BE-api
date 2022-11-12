'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CarInspectionInfo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plateNumber: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      Model: {
        type: Sequelize.STRING
      },
      rejectionReason1: {
        type: Sequelize.TEXT
      },
      rejectionReason2: {
        type: Sequelize.TEXT
      },
      rejectionReason3: {
        type: Sequelize.TEXT
      },
      pass: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CarInspectionInfo');
  }
};