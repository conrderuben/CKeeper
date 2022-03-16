'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alquiler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Alquiler.hasMany(models.Factura,{
        foreignKey:'idAlquiler'

      })

      Alquiler.belongsTo(models.Persona,{
        foreignKey:'id',
        target_key:'arrendador'
      })

      Alquiler.belongsTo(models.Persona,{
        foreignKey:'id',
        target_key:'arrendatario'
      })
    }
  }
  Alquiler.init({
    fechaInicio: DataTypes.DATE,
    fechaFin: DataTypes.DATE,
    arrendador: DataTypes.INTEGER,
    arrendatario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Alquiler',
  });
  return Alquiler;
};