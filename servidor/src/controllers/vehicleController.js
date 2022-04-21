const bd = require("../settings/db")
const modeloVehiculo = require('../../models').Vehiculo;
const modeloMarca = require('../../models').Marca;
const jwt = require('jsonwebtoken');


exports.getAll = async (req, res) => {
    const listVehicles =  await modeloVehiculo.findAll();
   
    res.json(listVehicles);
}

exports.getById = async (req, res) => {
    const token = req.cookies.jwt;
    const data = jwt.decode(token, 'Ckeeper')
    const listVehicles =  await modeloVehiculo.findAll({
        where:{idUsuario:data.data.id}
    });
   
    res.json(listVehicles);
}

exports.getBrandById = async (req, res)=>{
    // const sql = "SELECT * FROM Marcas WHERE id = ?";
    // const brand = await bd.query(sql,[req.params.idMarca], (err, result)=>{
    //         if(err){
    //             console.log(err);
    //         }else{
    //             return result
    //         }
    //     } )
    const brand = await modeloMarca.findByPk(req.params.idMarca
    )
    res.json(brand.nombre);
}