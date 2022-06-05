const parkingModel = require('../../models').Parking;

exports.createRent = async (req, res) => {
    parkingModel.update({rented:1},
        {where:{id:req.body.id}})
        
    res.send('Actualizado');
}