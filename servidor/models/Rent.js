'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Alquiler.hasMany(models.Bill,{
        foreignKey:'rentId'

      })

      Alquiler.belongsTo(models.People,{
        foreignKey:'id',
        target_key:'renter'
      })

      Alquiler.belongsTo(models.People,{
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