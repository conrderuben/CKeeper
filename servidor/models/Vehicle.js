'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    static associate(models) {
      Vehicle.belongsTo(models.People,{
        foreignKey:'id',
        target_key:'userId'
      })

      Vehiculo.belongsTo(models.Brand,{
        foreignKey:'id',
        target_key:'brandId'
      })
    }
  }
  Vehicle.init({
    type: DataTypes.STRING,
    matriculationDate: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};