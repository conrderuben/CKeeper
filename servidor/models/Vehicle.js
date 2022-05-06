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

      Vehicle.belongsTo(models.Type,{
        foreignKey:'id',
        target_key:'typeId'
      })
    }
  }
  Vehicle.init({
    type: DataTypes.STRING,
    matriculationDate: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vehicle',
  });
  return Vehicle;
};