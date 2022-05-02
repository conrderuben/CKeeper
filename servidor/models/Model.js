'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Model extends Model {
    static associate(models) {
      Model.hasMany(models.Brand,{
        foreignKey:'idModel'
      })    }
  }
  Model.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Model',
  });
  return Model;
};