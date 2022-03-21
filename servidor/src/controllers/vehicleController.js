const bd = require("../settings/db")
const modeloVehiculo = require('../../models').Vehiculo;

exports.getAll = async (req, res) => {
    const listVehicles =  await modeloVehiculo.findAll();
   
    res.json(listVehicles);
}