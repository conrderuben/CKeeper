'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      People.hasMany(models.Vehicle,{
        foreignKey:'userId'

      })
      People.hasMany(models.Rent,{
        foreignKey:'renter'

      })
      People.hasMany(models.Rent,{
        foreignKey:'tenant'

      })
      People.hasMany(models.Parking,{
        foreignKey:'userId'

      })
    }
  }
  People.init({
    user: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    password: DataTypes.STRING,
    bornDate: DataTypes.DATE,
    mail: DataTypes.STRING,
    phone: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'People',
  });
  return People;
};