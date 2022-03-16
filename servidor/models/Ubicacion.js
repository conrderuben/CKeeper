'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ubicacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      Ubicacion.hasMany(models.Plaza,{
        foreignKey:'idUbicacion'
      })

      Ubicacion.belongsTo(models.Municipio,{
        foreignKey:'id',
        target_key:'idMunicipio'
      })
    }
  }
  Ubicacion.init({
    calle: DataTypes.STRING,
    codigoPostal: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    idMunicipio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ubicacion',
  });
  return Ubicacion;
};