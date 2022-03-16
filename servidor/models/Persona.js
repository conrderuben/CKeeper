'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Persona.hasMany(models.Vehiculo,{
        foreignKey:'idUsuario'

      })
      Persona.hasMany(models.Alquiler,{
        foreignKey:'arrendador'

      })
      Persona.hasMany(models.Alquiler,{
        foreignKey:'arrendatario'

      })
      Persona.hasMany(models.Plaza,{
        foreignKey:'idUsuario'

      })

    }
  }
  Persona.init({
    usuario: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    correo: DataTypes.STRING,
    telefono: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};