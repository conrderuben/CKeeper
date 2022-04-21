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