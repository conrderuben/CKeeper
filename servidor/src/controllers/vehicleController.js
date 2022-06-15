const bd = require("../settings/db")
const vehicleModel = require('../../models').Vehicle;
const brandModel = require('../../models').Brand;
const typeModel = require('../../models').Type;
const multer = require('multer');
const path = require('path');
const cors = require ("cors");
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
    exports.getByUserId = async (req, res) => {
    const listVehicles =  await vehicleModel.findAll({
        where:{userId:req.params.user}
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
    const model= await typeModel.findByPk(req.params.typeId);
    
    const brand = await brandModel.findByPk(model.idBrand);
    const data = {
    model : model.name,
    brand : brand.name
    
}
    res.json(data);
}
    exports.addCar = async (req, res)=>{

    
        const token = req.cookies.jwt;
        const user = jwt.decode(token, 'Ckeeper')
        const data={
        type:req.body.form.type,
        matriculationDate:req.body.form.matriculationDate,
        userId:user.data.id,
        typeId:req.body.form.typeId,
        
      }
      var vehicleId=0

         await  vehicleModel.create(data).then(result=>{vehicleId=result.dataValues.id})

            res.json({id:vehicleId});
       
}

exports.photo = async (req,res,next)=> {
    const token = req.cookies.jwt;
    const data = jwt.decode(token, 'Ckeeper')
  const usu=data.data.id;  
      const storage = multer.diskStorage({
          destination:path.join( "../cliente/src/assets/users/"+usu+"/Vehicles/Vehicle"+req.params.vehicleId+"/") ,
          filename: function (req, file, cb) {
            cb(
              null,
              "vehicle"+".png",
            );
          },
        });
  
        const upload = multer({
          storage: storage,
          
       }).single("photos");
  
       upload(req, res, (err) => {
          if(!err)
             return res.send(200).end();
       });


    }
exports.editCar = async (req, res)=>{
    const car= await vehicleModel.findByPk(req.params.carId);
    const model= await typeModel.findByPk(car.typeId);
    const brand = await brandModel.findByPk(model.idBrand);
    const data = {car:car,brand:brand}
    res.json(data);
}
exports.updateVehicle = async (req, res)=>{
    
await vehicleModel.update({type:req.body.form.type,matriculationDate:req.body.form.matriculationDate,typeId:req.body.form.typeId,},
    {where:{id:req.params.carId}})

    res.json({id:req.params.carId});

}

exports.deleteVehicle = async (req, res)=>{
    
    return vehicleModel.destroy({
        where: { id: req.params.carId }
       })
    }