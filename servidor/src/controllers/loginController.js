const db = require("../../models");
const bd = require("../settings/db")
const modeloPersona = require('../../models').Persona;
const bcrypt = require('bcrypt')

exports.login = (req, res) => {

    const user = req.body.user;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE usuario = ?",
        [user],
        (err, result) =>{
            if(err){
                res.send({err:err});
            }

            if(result>0){
                bcrypt.compare(password, result[0].contraseña, (err, response)=>{
                    if(response){
                        res.send(result);
                    }else{
                        res.send({message: "Wrong username/password combination!"})
                    }
                })
            }else{
                res.send({message: "User doesn´t exist"})
            }
        }
    )



};