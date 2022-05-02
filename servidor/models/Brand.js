'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      Brand.hasMany(models.Vehicle,{
        foreignKey:'brandId'
      })

      Marca.belongsTo(models.Model,{
        foreignKey:'id',
        target_key:'idModel'
      })

    }
  }
  Brand.init({
    name: DataTypes.STRING,
    idModel: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Brand',
  });
  return Brand;
};