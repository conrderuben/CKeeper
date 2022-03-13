const bd = require("../settings/db")


exports.registro = (req, res) => {
    const id = 0;
    const usuario = req.body.form.usuario;
    const contrasena = req.body.form.contrasena;
    const nombre = req.body.form.nombre;
    const apellido = req.body.form.apellido;
    const fecha = req.body.form.fecha;
    const correo = req.body.form.correo;
    const telefono = req.body.form.telefono;

    
const sql = `INSERT INTO persona(id_usuario, usuario, nombre, apellido, contraseña, fechaNacimiento, correo, telefono) VALUES (?,?,?,?,?,?,?,?)`
    bd.query(sql,[id,usuario,contrasena,nombre,apellido,fecha,correo,telefono] ,(err, result)=>{
        if(err){
            
            console.log(err);
        }else{
            console.log('Se ha registrado');
            
        }
        
    })
    res.send("K paisa")

    

}