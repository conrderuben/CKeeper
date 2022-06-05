'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    static associate(models) {
      Bill.belongsTo(models.Rent,{
        foreignKey:'id',
        target_key:'rentId'
      })
    }
    
  }
  Bill.init({
    issueDate: DataTypes.DATE,
    type: DataTypes.STRING,
    rentId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bill',
  });
  return Bill;
};