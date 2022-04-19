const bd = require("../settings/db")
const modeloMunicipio = require('../../models').Municipio;
const modeloUbicacion = require('../../models').Ubicacion;




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
    // const date = req.body.form.date;
    // const email = req.body.form.email;
    // const telephone = req.body.form.telephone;

    const data={
        id:0,
        calle:street,
        codigoPostal:pc,
        numero:number,
        idMunicipio:cities,
        
    }
    
        
          
            modeloUbicacion.create(data)
            const id= await modeloUbicacion.max('id');
        console.log(id);
        
       
    }
    

