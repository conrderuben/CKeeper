const bd = require("../settings/db")
const modeloPersona = require('../../models').Persona;

exports.getById = async (req, res) => {
    const user=  await modeloPersona.findOne({
        where:{id: req.params.id}
    });
   
    res.json(user);
}