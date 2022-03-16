'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Persona', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuario: {
        type: Sequelize.STRING,
        unique:true,
        allowNull: false
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      contraseña: {
        type: Sequelize.STRING
      },
      fechaNacimiento: {
        type: Sequelize.DATE
      },
      correo: {
        type: Sequelize.STRING,
        unique:true,
        allowNull: false
      },
      telefono: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Persona');
  }
};