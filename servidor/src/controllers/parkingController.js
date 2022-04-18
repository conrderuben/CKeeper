const bd = require("../settings/db")
const modeloMunicipio = require('../../models').Municipio;
const modeloUbicacion = require('../../models').Ubicacion;




exports.getAll = async (req, res) => {
    const listCities =  await modeloMunicipio.findAll();
   
    res.json(listCities);
}





exports.parking = (req, res) => {
    const id = 0;
    const street = req.body.form.street;
    const pc = req.body.form.pc;
    const number = req.body.form.number;
    const cities = req.body.form.cities;
    // const date = req.body.form.date;
    // const email = req.body.form.email;
    // const telephone = req.body.form.telephone;

    const form =req.body.form;
   
        if(err){
            console.log('error')
            console.log(form)
        }
          
            modeloUbicacion.create(id,street,pc,number,cities,'2022-03-21 18:20:11','2022-03-21 18:20:11')
        
        
    }
    

