'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ubicacion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      calle: {
        type: Sequelize.STRING
      },
      codigoPostal: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.INTEGER
      },
      idMunicipio: {
        type: Sequelize.INTEGER,
        references:{
          model:'Municipio',
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
    await queryInterface.dropTable('Ubicacion');
  }
};