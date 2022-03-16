'use strict';
const {
  Model
} = require('sequelize');
const Persona = require('./Persona');
module.exports = (sequelize, DataTypes) => {
  class Vehiculo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vehiculo.belongsTo(models.Persona,{
        foreignKey:'id',
        target_key:'idUsuario'
      })

      Vehiculo.belongsTo(models.Marca,{
        foreignKey:'id',
        target_key:'idMarca'
      })
    }
  }
  Vehiculo.init({
    tipo: DataTypes.STRING,
    fechaMatriculacion: DataTypes.DATE,
    idUsuario: DataTypes.INTEGER,
    idMarca: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vehiculo',
  });
  return Vehiculo;
};