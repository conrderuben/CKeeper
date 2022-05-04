const bd = require("../settings/db")
const vehicleModel = require('../../models').Vehicle;
const brandModel = require('../../models').Brand;
const jwt = require('jsonwebtoken');


exports.getAll = async (req, res) => {
    const listVehicles =  await vehicleModel.findAll();
   
    res.json(listVehicles);
}

exports.getById = async (req, res) => {
    const token = req.cookies.jwt;
    const data = jwt.decode(token, 'Ckeeper')
    const listVehicles =  await vehicleModel.findAll({
        where:{userId:data.data.id}
    });
   
    res.json(listVehicles);
}

exports.getBrandById = async (req, res)=>{
    // const sql = "SELECT * FROM Brand WHERE id = ?";
    // const brand = await bd.query(sql,[req.params.brandId], (err, result)=>{
    //         if(err){
    //             console.log(err);
    //         }else{
    //             return result
    //         }
    //     } )
    // console.log(req)
    console.log(req.params)
    const brand = await brandModel.findByPk(req.params.brandId
    )

    res.json(brand.name);
}

exports.addCar = async (req, res)=>{
    const form =req.body.form;
            vehicleModel.create(data)
        .then((data)=>{
            res.json({info:data})
         }).catch((err)=>{
             res.json({error:err})
         })
}