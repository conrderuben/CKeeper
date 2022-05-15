const bd = require("../settings/db")
const peopleModel = require('../../models').People;




//Bcrytp for the hashing
const bcrypt = require('bcrypt')
const saltRounds = 10;


exports.register = (req, res) => {

    const form =req.body.form;
    bcrypt.hash(form.password, saltRounds, (err, hash)=>{
        if(err){
            console.log('error with the hash')
        }
            const data = {...form, password:hash,active:1 }
            peopleModel.create(data)
        .then((data)=>{
            res.json({info:data})
         }).catch((err)=>{
             res.json({error:err})
         })
        
    }
    )
    
   
    















// const sql = `INSERT INTO persona(id_usuario, usuario, nombre, apellido, contraseña, fechaNacimiento, correo, telefono) VALUES (?,?,?,?,?,?,?,?)`
//     bd.query(sql,[id,user,password,name,surname,date,email,telephone] ,(err, result)=>{
//         if(err){
            
//             console.log(err);
//         }else{
//             console.log('Se ha registrado');
            
//         }
        
    // })
    // res.send("K paisa")

    

}