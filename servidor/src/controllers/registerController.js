const bd = require("../settings/db")


exports.register = (req, res) => {
    const id = 0;
    const user = req.body.form.user;
    console.log(user)
    const password = req.body.form.password;
    const name = req.body.form.name;
    const surname = req.body.form.surname;
    const date = req.body.form.date;
    const email = req.body.form.email;
    const telephone = req.body.form.telephone;

    
const sql = `INSERT INTO persona(id_usuario, usuario, nombre, apellido, contraseña, fechaNacimiento, correo, telefono) VALUES (?,?,?,?,?,?,?,?)`
    bd.query(sql,[id,user,password,name,surname,date,email,telephone] ,(err, result)=>{
        if(err){
            
            console.log(err);
        }else{
            console.log('Se ha registrado');
            
        }
        
    })
    res.send("K paisa")

    

}