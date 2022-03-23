const db = require("../../models");
const bd = require("../settings/db")
const modeloPersona = require('../../models').Persona;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function generateToken(obj, res) {
    const token = jwt.sign({obj}, 'Ckeeper', {
        expiresIn: '1h'
    });
    res.cookie('jwt', token, { expire: new Date() + 60000 });
}

exports.validateToken = (req, res, next) => {
    let token = req.cookies.jwt;
    if (typeof token != "undefined") {

        jwt.verify(token, 'Ckeeper', (err, data) => {
            if (!err) {
                // Token válido
                next();
            } else {
                // Token expirado
                res.send("mal");
            }
        })
    } else {
        // No hay token
        res.status(401).render("401");
    }
}

exports.login = (req, res) => {

    const user = req.body.form.user;
    const password = req.body.form.password;

    bd.query(
        "SELECT * FROM Personas WHERE usuario = ?",
        [user],
        (err, result) =>{
            if(err){
                res.send({
                    auth:false,
                    message:"query error"
                })
            }
            if(result.length==1){
                bcrypt.compare(password, result[0].contraseña, (err, response)=>{
                    if(response){
                        // generateToken(result[0], res);
                        res.send({
                            auth:true,
                            message:"Its valid password",
                            obj:result[0]
                        })

                    }else{
                        res.send({
                            auth:false,
                            message:"Its invalid password"
                        })
                    }
                })
            }else{
                res.send({
                    auth:false,
                    message:"result !>0"
                })
                
            }
        }
    )



};