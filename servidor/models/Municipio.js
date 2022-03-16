'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Municipio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Municipio.hasMany(models.Ubicacion,{
        foreignKey:'idMunicipio'

      })
    }
  }
  Municipio.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Municipio',
  });
  return Municipio;
};