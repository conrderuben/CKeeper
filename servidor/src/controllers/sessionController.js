const db = require("../../models");
const bd = require("../settings/db")
const modeloPersona = require('../../models').Persona;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function generateToken(obj, tipo) {
    const data = {
        id : obj.id,
        type : tipo
    }
    const token = jwt.sign({data}, 'Ckeeper', {
        expiresIn: '1h'
    });
    
    
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
                        if(result[0].usuario ==='Admin123'){
                            const token = generateToken(result[0], 'admin');
                            res.cookie('jwt', token, { httpOnly: true, secure : true, domain:'localhost', path:'/'  }).status(200).json({msg: 'hola'});
                        }else{
                            const token = generateToken(result[0], 'user');
                            res.cookie('jwt', token, { httpOnly: true, secure : true, domain:'localhost', path:'/'  }).status(200).json({msg: 'hola'});
                        }
                        
    

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

exports.logout = (req, res) => {
        res.status(202).clearCookie('jwt').send('logout')
};