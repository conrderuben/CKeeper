'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Plaza', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      precio: {
        type: Sequelize.INTEGER
      },
      alquilada: {
        type: Sequelize.BOOLEAN
      },
      publicada: {
        type: Sequelize.BOOLEAN
      },
      descripcion: {
        type: Sequelize.STRING
      },
      alto: {
        type: Sequelize.INTEGER
      },
      largo: {
        type: Sequelize.INTEGER
      },
      ancho: {
        type: Sequelize.INTEGER
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
      idUbicacion: {
        type: Sequelize.INTEGER,
        references:{
          model:'Ubicacion',
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
    await queryInterface.dropTable('Plaza');
  }
};