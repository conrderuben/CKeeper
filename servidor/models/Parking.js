'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parking extends Model {

    static associate(models) {
      Parking.belongsTo(models.People,{
        foreignKey:'id',
        target_key:'userId'
      })

      Parking.belongsTo(models.Ubication,{
        foreignKey:'id',
        target_key:'ubicationId'
      })
    }
  }
  Parking.init({
    prize: DataTypes.INTEGER,
    rented: DataTypes.BOOLEAN,
    published: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    height: DataTypes.INTEGER,
    long: DataTypes.INTEGER,
    width: DataTypes.INTEGER,
    photo: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    ubicationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Parking',
  });
  return Parking;
};