const bd = require("../settings/db")
const modeloVehiculo = require('../../models').Vehiculo;
const modeloMarca = require('../../models').Marca;


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