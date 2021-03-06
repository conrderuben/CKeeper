const db = require("../../models");
const bd = require("../settings/db")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
                next();
            } else {
                res.send("mal");
            }
        })
    } else {
        res.status(401).render("401");
    }
}

exports.login = (req, res) => {

    const user = req.body.form.user;
    const password = req.body.form.password;

    bd.query(
        "SELECT * FROM People WHERE mail='"+user+"' OR user ='"+user+"'",
        [user],
        (err, result) =>{
            if(err){
              res.json({
                error: 'invalid user or password'
              })
            }
            else if(result.length==1){ 
                bcrypt.compare(password, result[0].password, (err, response)=>{
                    if(response){
                        if(result[0].user ==='Admin123'){
                            const token = generateToken(result[0], 'admin');
                            res.cookie('jwt', token, { httpOnly: true, secure : true, domain:'34.175.231.25', path:'/'  }).status(200).json({msg: 'hola'});
                        }else if(result[0].active == 1){
                            const token = generateToken(result[0], 'user');
                            res.cookie('jwt', token, { httpOnly: true, secure : true, domain:'34.175.231.25', path:'/'  }).status(200).json({msg: 'hola'});
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
                 res.json({
                            error: 'invalid user or password'})
                    
                
            }
        }
    )
};

exports.logout = (req, res) => {
        res.status(202).clearCookie('jwt').send('logout')
};