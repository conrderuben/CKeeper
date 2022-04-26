const bd = require("../settings/db")
const modeloPersona = require('../../models').Persona;
const jwt = require('jsonwebtoken');

exports.getById = async (req, res) => {
    const user=  await modeloPersona.findOne({
        where:{id: req.params.id}
    });
   
    res.json(user);
}

exports.getUser = async (req, res) => {
     const token = req.cookies.jwt;

     const data = jwt.decode(token, 'Ckeeper')

     const user=  await modeloPersona.findOne({
        where:{id: data.data.id}
    });
     res.send(user)
    
    
}

exports.validateToken = (req, res) => {
    let token = req.cookies.jwt;
    if (typeof token != "undefined") {

        jwt.verify(token, 'Ckeeper', (err, data) => {
            if (!err) {
                res.send({isAuth: true})
            } else {
                console.log(err)
                // Token expirado
                res.send({error: "Token expirado o erróneo",
                isAuth: false});
            }
        })
    } else {
        // No hay token
        res.status(401).send(
            {error: 'No autorizado',
            isAuth: false}
            );
    }
}