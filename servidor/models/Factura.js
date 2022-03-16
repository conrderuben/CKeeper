'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Factura.belongsTo(models.Alquiler,{
        foreignKey:'id',
        target_key:'idAlquiler'
      })
    }
  }
  Factura.init({
    fechaEmision: DataTypes.DATE,
    tipo: DataTypes.STRING,
    idAlquiler: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Factura',
  });
  return Factura;
};