const parkingModel = require('../../models').Parking;
const rentModel = require('../../models').Rent;
const peopleModel = require('../../models').People;
const billModel = require('../../models').Bill;

exports.createRent = async (req, res) => {
    parkingModel.update({rented:1},
        {where:{id:req.body.place.placeId}})

        const renter =  await peopleModel.findOne({
            where:{user:req.body.user.user}
        })

        const rentData = {
            id: 0,
            startDate: req.body.form.date1,
            endDate: req.body.form.date2,
            renter:renter.id,
            tenant:req.body.user.id
        }
        let rentId = 0;
         await rentModel.create(rentData).then(result =>{
            rentId = result.id;
              
         });
         var date1 = new Date(req.body.form.date1);
         var date2 = new Date(req.body.form.date2);
         var difference = date2.getTime() - date1.getTime();
         var days = Math.ceil(difference / (1000 * 3600 * 24));
         console.log(days)

         
         const billData = {
             id: 0,
             issueDate: new Date(),
             type: 'prize/day',
             rentId:rentId,
             amount:days*req.body.place.price 
         }
         billModel.create(billData);



    res.send('Actualizado');
}