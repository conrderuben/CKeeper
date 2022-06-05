const db = require("../../models");
const bd = require("../settings/db")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const peopleModel = require('../../models').People;

function generateToken(obj, t) {
    const data = {
        id : obj.id,
        type : t
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
        "SELECT * FROM People WHERE user = ?",
        [user],
        (err, result) =>{
            if(err){
                console.log(err)
              res.json({
                error: 'invalid user or password'
              })
            }
            else if(result.length==1){ 
                bcrypt.compare(password, result[0].password, (err, response)=>{
                    if(response){
                        if(result[0].user ==='Admin123'){
                            const token = generateToken(result[0], 'admin');
                            res.cookie('jwt', token, { httpOnly: true, secure : true, domain:'localhost', path:'/'  }).status(200).json({msg: 'hola'});
                        }else if(result[0].active == 1){
                            const token = generateToken(result[0], 'user');
                            res.cookie('jwt', token, { httpOnly: true, secure : true, domain:'localhost', path:'/'  }).status(200).json({msg: 'hola'});
                        }else{
                            res.json({
                                error: 'this user is not active'})
                        }
                        
    

                    }else{
                        res.json({
                            error: 'invalid user or password'})
                    }
                })
            }else{
                console.log('ka pasao')
                
            }
        }
    )



};

exports.logout = (req, res) => {
        res.status(202).clearCookie('jwt').send('logout')
};