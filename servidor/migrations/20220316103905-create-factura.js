'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Factura', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fechaEmision: {
        type: Sequelize.DATE
      },
      tipo: {
        type: Sequelize.STRING
      },
      idAlquiler: {
        type: Sequelize.INTEGER,
        references:{
          model:'Alquiler',
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
    await queryInterface.dropTable('Factura');
  }
};