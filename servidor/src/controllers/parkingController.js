const bd = require("../settings/db")
const modeloMunicipio = require('../../models').Municipio;
const modeloUbicacion = require('../../models').Ubicacion;
const modeloParking = require('../../models').Plaza;




exports.getAll = async (req, res) => {
    const listCities =  await modeloMunicipio.findAll();
   
    res.json(listCities);
}





exports.parking = async (req, res) => {
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
    const photo = null;//req.body.form.foto;


    // const date = req.body.form.date;
    // const email = req.body.form.email;
    // const telephone = req.body.form.telephone;

    const dataUbication={
        id:0,
        calle:street,
        codigoPostal:pc,
        numero:number,
        idMunicipio:cities,
        
    }
    
        
          
             await modeloUbicacion.create(dataUbication)
            const id= await modeloUbicacion.max('id');
        console.log(id);
        dataParking={
          precio:price,
          alquilada:false,
          publicada:false,
          descripcion:description,
          alto:height,
          largo:long,
          ancho:width,
          idUsuario:15,
          idUbicacion:id,
          created:null,
          updated:null,
          photo:null
        }
        await modeloParking.create(dataParking)
    }
    

