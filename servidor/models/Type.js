'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    static associate(models) {
      Type.hasMany(models.Vehicle,{
        foreignKey:'typeId'
      })

      Type.belongsTo(models.Brand,{
        foreignKey:'id',
        target_key:'idBrand'
      })

    }
  }
  Type.init({
    name: DataTypes.STRING,
    idBrand: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};