const bd = require("../settings/db")

exports.inicio = (req, res) => {

    res.render("hola");
}

exports.registro = (req, res) => {
    console.log(req.body.nombre);
const sql = `INSERT INTO persona(id_usuario, usuario, nombre, apellido, contraseña, fechaNacimiento, correo, telefono) VALUES ())`
    bd.query(sql, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Se ha registrado');
            
        }
        
    })
    res.send("K paisa")

    

}