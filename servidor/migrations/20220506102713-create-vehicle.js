'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      matriculationDate: {
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model:'People',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
     
      },
      typeId: {
        type: Sequelize.INTEGER,
        type: Sequelize.INTEGER,
        references:{
          model:'Types',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
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
    await queryInterface.dropTable('Vehicles');
  }
};