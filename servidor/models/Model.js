'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Modol extends Model {
    static associate(models) {
      Modol.hasMany(models.Brand,{
        foreignKey:'idModel'
      })    }
  }
  Modol.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Modol',
  });
  return Modol;
};