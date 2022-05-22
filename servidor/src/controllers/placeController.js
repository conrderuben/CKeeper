const bd = require("../settings/db")
// const modeloPlaza = require('../../models').Plaza;
const cityModel = require('../../models').City;
const ubicationModel = require('../../models').Ubication;
const parkingModel = require('../../models').Parking;
const peopleModel = require('../../models').People;
const multer = require('multer');
const path = require('path');
const cors = require ("cors");
const jwt = require ("jsonwebtoken")

exports.getAll = async (req, res) => {
    const listCities =  await cityModel.findAll();
   
    res.json(listCities);
}
exports.getAllPublic = async (req, res) => {
    const rentPlace =  await parkingModel.findAll({
        where:{
          published: true,
          rented: false,
        }
    });
   
    res.json(rentPlace);
}

exports.getPlacesByUserId = async (req, res) => {
    const token = req.cookies.jwt;
    const data = jwt.decode(token, 'Ckeeper')
    const listPlaces =  await parkingModel.findAll({
        where:{userId:data.data.id}
    });
   
    res.json(listPlaces);
}

exports.getPlacesById = async (req, res) => {
  const token = req.cookies.jwt;
  const data = jwt.decode(token, 'Ckeeper')
  const listPlaces =  await parkingModel.findAll({
      where:{userId:data.data.id}
  });
 
  res.json(listPlaces);
}

exports.getPlacesData = async (req, res) => {
  const ubi = await ubicationModel.findByPk(req.params.ubicationId)
  const city= await cityModel.findByPk(ubi.idCity)
  const user = await peopleModel.findByPk(req.params.userId)
  const ownPlaceData={
    street: ubi.street,
    pc: ubi.postalCode,
    number: ubi.number,
    city: city.name,
    user_name: user.user,
    user_phone: user.phone,
    user_mail: user.mail
  }
 
  res.json(ownPlaceData);
}

exports.setPublished = async (req, res) => {
     parkingModel.update({published:req.params.value},
         {where:{id:req.params.parkingId}})
         
     res.send('Actualizado');
}




    

exports.addParking =  async (req,res) => {
    const token = req.cookies.jwt;
    const data = jwt.decode(token, 'Ckeeper')
    const form =req.body.obj.form;
    const dataUbication={
        id:0,
        street:form.street,
        postalCode:form.pc,
        number:form.number,
        idCity:form.cities,
}  
          //INSERT UBICATION
             await ubicationModel.create(dataUbication)
            const id= await ubicationModel.max('id');

            //DATA PARKING
          const dataParking={
          prize:form.price,
          rented:false,
          published:false,
          description:form.description,
          height:form.height,
          long:form.long,
          width:form.width,
          photo:req.body.obj.cont,
          userId:data.data.id,
          ubicationId:id,
          created:null,
          updated:null,
          
        }
        //INSERT PARKING
        await parkingModel.create(dataParking)
}
exports.photos = function (req,res,next) {

const usu="Ruben"
    const storage = multer.diskStorage({
        destination:path.join( "../assets/users/"+usu+"/Parking/") ,
        filename: function (req, file, cb) {
          cb(
            null,
            "parking"+req.files.length + path.extname(file.originalname),
          );
        },
      });

      const upload = multer({
        storage: storage,
        limits:{fileSize: 1000000},
     }).any("photos");

     upload(req, res, (err) => {
        if(!err)
           return res.send(200).end();
     });


}



exports.deletePlace = async (req, res)=>{
    
  return parkingModel.destroy({
      where: { id: req.params.placeId }
     })
  

  }
  
   



