const parkingModel = require('../../models').Parking;
const rentModel = require('../../models').Rent;
const peopleModel = require('../../models').People;

exports.createRent = async (req, res) => {
    parkingModel.update({rented:1},
        {where:{id:req.body.placeId}})


        

        rentModel.create({
            id: 0,
            startDate: req.body.form.matriculationDate1,
            endDate: req.body.form.matriculationDate2,
            renter:req.body.user.id,
            tenant:


        });
        

    res.send('Actualizado');
}