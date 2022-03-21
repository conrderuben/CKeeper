const db = require("../../models");
const bd = require("../settings/db")
const modeloPersona = require('../../models').Persona;
const bcrypt = require('bcrypt')

exports.login = (req, res) => {

    const user = req.body.form.user;
    const password = req.body.form.password;

    bd.query(
        "SELECT * FROM Personas WHERE usuario = ?",
        [user],
        (err, result) =>{
            if(err){
                res.send({
                    usuario:null,
                    mensaje:"query error"
                })
            }
            if(result.length==1){
                bcrypt.compare(password, result[0].contraseña, (err, response)=>{
                    if(response){
                        res.send({
                            usuario:result[0].usuario,
                            mensaje:"Its correct"
                        })
                    }else{
                        res.send({
                            usuario:null,
                            mensaje:"Its invalid password"
                        })
                    }
                })
            }else{
                res.send({
                    usuario:null,
                    mensaje:"result !>0"
                })
                
            }
        }
    )



};