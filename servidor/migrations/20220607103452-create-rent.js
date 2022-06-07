'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
      },
      renter: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'People',
          key:'id'
        },
      },
      tenant: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'People',
          key:'id'
        },
      },
      parkingId: {
        type: Sequelize.INTEGER,
        references:{
          model:'Parkings',
          key:'id'
        }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rents');
  }
};