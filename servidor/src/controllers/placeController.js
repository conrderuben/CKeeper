const bd = require("../settings/db")
const modeloPlaza = require('../../models').Plaza;


exports.addParking = (req, res) => {
    const id = 0;
    const prize = req.body.form.prize;
    const rented = req.body.form.rented;
    const public = req.body.form.public;
    const description = req.body.form.description;
    const userId = req.body.form.userId;
    const dimensions = req.body.form.dimensions;
    const ubiId = req.body.form.ubiId;

    
const sql = `INSERT INTO plaza(id_usuario, usuario, nombre, apellido, contraseña, fechaNacimiento, correo, telefono) VALUES (?,?,?,?,?,?,?,?)`
    bd.query(sql,[id,prize,rented,public,description,userId,dimensions,ubiId] ,(err, result)=>{
        if(err){
            
            console.log(err);
        }else{
            console.log('Se ha registrado la plaza');
            
        }
        
    })
    res.send("K paisa")

}

exports.getAllPublic = async (req, res) => {
    const rentPlace =  await modeloPlaza.findAll({
        where:{publicada: true}
    });
   
    res.json(rentPlace);
}