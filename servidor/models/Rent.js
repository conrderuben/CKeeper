'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rent extends Model {
    static associate(models) {
      Rent.hasMany(models.Bill,{
        foreignKey:'rentId'

      })

      Rent.belongsTo(models.People,{
        foreignKey:'id',
        target_key:'renter'
      })

      Rent.belongsTo(models.People,{
        foreignKey:'id',
        target_key:'tenant'
      })
    }
  }
  Rent.init({
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    renter: DataTypes.INTEGER,
    tenant: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rent',
  });
  return Rent;
};