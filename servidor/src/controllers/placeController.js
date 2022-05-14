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




    

exports.addParking =  async (req,res) => {
    const form =req.body.obj.form;

    const street = form.street;
    const pc = form.pc;
    const number = form.number;
    const cities = form.cities;

    //PARKING DATA

    const price = form.price;
    const height = form.height;
    const width =form.width;
    const long = form.long;
    const description = form.description;


    const dataUbication={
        id:0,
        street:street,
        postalCode:pc,
        number:number,
        idCity:cities,
} 

          //INSERT UBICATION
             await ubicationModel.create(dataUbication)
            const id= await ubicationModel.max('id');

            //DATA PARKING
          const dataParking={
          prize:price,
          rented:false,
          published:false,
          description:description,
          height:height,
          long:long,
          width:width,
          photo:req.body.obj.cont,
          userId:1,
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
        destination:path.join( "C:/CkeeperImgs/"+usu+"/Parking/"),
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



  
   



