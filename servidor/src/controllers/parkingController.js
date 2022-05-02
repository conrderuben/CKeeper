const bd = require("../settings/db")
const modeloMunicipio = require('../../models').Municipio;
const modeloUbicacion = require('../../models').Ubicacion;
const modeloParking = require('../../models').Plaza;
const multer = require('multer');
const path = require('path');
const cors = require ("cors");

exports.getAll = async (req, res) => {
    const listCities =  await modeloMunicipio.findAll();
   
    res.json(listCities);
}





exports.parking = function (req,res,next) {

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
        // console.log("Request ---", req.body);
        // console.log("Request file ---", req.file);//Here you get file.
        // /*Now do where ever you want to do*/
        if(!err)
           return res.send(200).end();
     });
















}




//     // const form =req.body.form;
//     // console.log(form);
//     // const street = form.street;
//     // const pc = req.body.form.pc;
//     // const number = req.body.form.number;
//     // const cities = req.body.form.cities;

//     // //PARKING DATA

//     // const price = req.body.form.price;
//     // const height = req.body.form.height;
//     // const width = req.body.form.width;
//     // const long = req.body.form.long;
//     // const description = req.body.form.description;
//     // const photo =req.body.form.foto;
// const foto= req.body.userInfo.foto;
// console.log(req.body.userInfo.foto);
//     // const dataUbication={
//     //     id:0,
//     //     calle:street,
//     //     codigoPostal:pc,
//     //     numero:number,
//     //     idMunicipio:cities,
        
//     // }
    
        
          
//     //          await modeloUbicacion.create(dataUbication)
//     //         const id= await modeloUbicacion.max('id');
//     //     console.log(id);
//     //     dataParking={
//     //       precio:price,
//     //       alquilada:false,
//     //       publicada:false,
//     //       descripcion:description,
//     //       alto:height,
//     //       largo:long,
//     //       ancho:width,
//     //       idUsuario:15,
//     //       idUbicacion:id,
//     //       created:null,
//     //       updated:null,
//     //       photo:photo
//     //     }
//     //     console.log(photo);
//     //     await modeloParking.create(dataParking)


  
   


