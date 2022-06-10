const billModel = require('../../models').Bill;
const rentModel = require('../../models').Rent;
const parkingModel = require('../../models').Parking;
const jwt = require ("jsonwebtoken");
const Op = require('Sequelize').Op

exports.getBills = async (req, res) => {
    const token = req.cookies.jwt;
     const data = jwt.decode(token, 'Ckeeper')
     const listRents =  await rentModel.findAll({
         [Op.or]: [{renter: data.data.id}, {tenant: data.data.id}]
    }); 

    const bills = [];
    const places = [];
 
    listRents.forEach(rent => {
        bills.push(billModel.findAll({
            where:{rentId:rent.id}  
        }))
        places.push(parkingModel.findAll({
            where:{id:rent.parkingId}}))});
        
    Promise.all(places).then(result => {
        const placesData = result;
        Promise.all(bills).then(result => {
            const billsData = result;
        
            const response = {
                listRents,
                places: placesData,
                bills: billsData,
            }
            res.json(response);});
            
    
    });

   
    
 
}