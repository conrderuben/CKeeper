'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ubication extends Model {
    static associate(models) {
      Ubication.hasMany(models.Plaza,{
        foreignKey:'ubicationId'
      })

      Ubicacion.belongsTo(models.Municipio,{
        foreignKey:'id',
        target_key:'idCity'
      })
    }
  }
  Ubication.init({
    street: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    number: DataTypes.INTEGER,
    idCity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ubication',
  });
  return Ubication;
};