const bd = require("../settings/db")
const cityModel = require('../../models').City;
const ubicationModel = require('../../models').Ubication;
const parkingModel = require('../../models').Parking;
const multer = require('multer');
const path = require('path');
const cors = require ("cors");

exports.getAll = async (req, res) => {
    const listCities =  await cityModel.findAll();
   
    res.json(listCities);
}


exports.addParking =  async (req,res) => {





    const form =req.body.form;
    console.log(form);
    const street = form.street;
    const pc = req.body.form.pc;
    const number = req.body.form.number;
    const cities = req.body.form.cities;

    //PARKING DATA

    const price = req.body.form.price;
    const height = req.body.form.height;
    const width = req.body.form.width;
    const long = req.body.form.long;
    const description = req.body.form.description;


    const dataUbication={
        id:0,
        calle:street,
        codigoPostal:pc,
        numero:number,
        idMunicipio:cities,
        
    }
    
        
          //INSERT UBICATION
             await ubicationModel.create(dataUbication)
            const id= await ubicationModel.max('id');

            //DATA PARKING
          const dataParking={
          precio:price,
          alquilada:false,
          publicada:false,
          descripcion:description,
          alto:height,
          largo:long,
          ancho:width,
          photo:3,
          idUsuario:15,
          idUbicacion:id,
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



  
   


