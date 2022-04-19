const db = require("../../models");
const bd = require("../settings/db")
const modeloPersona = require('../../models').Persona;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function generateToken(obj) {
    const data = {
        datos : obj,
        auth : true,
        type : 'user'
    }
    const token = jwt.sign({data}, 'Ckeeper', {
        expiresIn: '1h'
    });
    // res.cookie('jwt', token, { expire: new Date() + 60000 });
    
    return token;
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
              res.status(401).json({
                error: 'invalid user or password'
              })
            }
            if(result.length==1){ 
                bcrypt.compare(password, result[0].contraseña, (err, response)=>{
                    if(response){
                        const token = generateToken(result[0]);
                        // res.send({
                        //     auth:true,
                        //     message:"Its valid password",
                        //     obj:result[0]
                        // })
                        res.cookie('jwt', token, { httpOnly: true, secure : true, domain:'localhost', path:'/'  }).status(200).json({msg: 'hola'});
                        // res.status(200).cookie('jwt', token, { expire: new Date() + 60000 });

                    }else{
                        res.status(401).json({
                            error: 'invalid user or password'})
                    }
                })
            }else{
                res.status(401).json({
                    error: 'invalid user or password'}) 
                
            }
        }
    )



};