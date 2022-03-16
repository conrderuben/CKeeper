'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vehiculo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.STRING
      },
      fechaMatriculacion: {
        type: Sequelize.DATE
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        references:{
          model:'Persona',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      },
      idMarca: {
        type: Sequelize.INTEGER,
        references:{
          model:'Marca',
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
    await queryInterface.dropTable('Vehiculo');
  }
};