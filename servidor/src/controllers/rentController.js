const parkingModel = require('../../models').Parking;
const rentModel = require('../../models').Rent;
const peopleModel = require('../../models').People;
const billModel = require('../../models').Bill;
const jwt = require ("jsonwebtoken");
const Op = require('Sequelize').Op

exports.createRent = async (req, res) => {
    parkingModel.update({rented:1},
        {where:{id:req.body.place.placeId}})

        const renter =  await peopleModel.findOne({
            where:{user:req.body.place.user} 
        })

        const rentData = {
            id: 0,
            startDate: req.body.form.date1,
            endDate: req.body.form.date2,
            renter:renter.id,
            tenant:req.body.user.id,
            parkingId: req.body.place.placeId,
        }
        let rentId = 0;
         await rentModel.create(rentData).then(result =>{
            rentId = result.id;
              
         });
         var date1 = new Date(req.body.form.date1);
         var date2 = new Date(req.body.form.date2);
         var difference = date2.getTime() - date1.getTime();
         var days = Math.ceil(difference / (1000 * 3600 * 24));

         const billData = {
             id: 0,
             issueDate: new Date(),
             type: 'prize/day',
             rentId:rentId,
             amount:days*(parseInt(req.body.place.prize)),
             
         }
            billModel.create(billData);
            res.status(200).json({msg : 'Purchase made'});
}

exports.getRentsByUserId = async (req, res) => {
    const token = req.cookies.jwt;
    const data = jwt.decode(token, 'Ckeeper')
    const listRents =  await rentModel.findAll({
        [Op.or]: [{renter: data.data.id}, {tenant: data.data.id}]
   }); 
   res.json({listRents});
};
