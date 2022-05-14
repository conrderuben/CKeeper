const bd = require("../settings/db")
const vehicleModel = require('../../models').Vehicle;
const brandModel = require('../../models').Brand;
const typeModel = require('../../models').Type;

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


exports.getAllBrands= async (req, res)=>{



    const listBrands=  await brandModel.findAll();
   
    res.json(listBrands);



}
exports.getTypeById= async (req, res)=>{

    const type = await typeModel.findAll({
        where: {idBrand:req.params.brandId}
      });
      res.json(type);
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
    const model= await typeModel.findByPk(req.params.typeId);
    
    const brand = await brandModel.findByPk(model.idBrand);
const data = {
    model : model.name,
    brand : brand.name
}
    res.json(data);
}

exports.addCar = async (req, res)=>{
    
        console.log(req.body.form.type)
        const data={
        type:req.body.form.type,
        matriculationDate:req.body.form.matriculationDate,
        userId:1,
        typeId:req.body.form.typeId,
        
      }
         
            console.log(data);
            vehicleModel.create(data)
       
}