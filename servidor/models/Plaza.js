'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plaza extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Plaza.belongsTo(models.Persona,{
        foreignKey:'id',
        target_key:'idUsuario'
      })

      Plaza.belongsTo(models.Ubicacion,{
        foreignKey:'id',
        target_key:'idUbicacion'
      })
    }
  }
  Plaza.init({
    precio: DataTypes.INTEGER,
    alquilada: DataTypes.BOOLEAN,
    publicada: DataTypes.BOOLEAN,
    descripcion: DataTypes.STRING,
    alto: DataTypes.INTEGER,
    largo: DataTypes.INTEGER,
    ancho: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER,
    idUbicacion: DataTypes.INTEGER,
    foto : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Plaza',
  });
  return Plaza;
};