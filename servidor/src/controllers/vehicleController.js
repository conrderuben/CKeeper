const bd = require("../settings/db")
const modeloVehiculo = require('../../models').Vehiculo;

exports.getAll = async (req, res) => {
    const listVehicles =  await modeloVehiculo.findAll();
   
    res.json(listVehicles);
}

exports.getById = async (req, res) => {
    const listVehicles =  await modeloVehiculo.findAll({
        where:{idUsuario:req.params.id}
    });
   
    res.json(listVehicles);
}