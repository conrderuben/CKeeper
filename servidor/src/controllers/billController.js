const billModel = require('../../models').Bill;
const rentModel = require('../../models').Rent;
const parkingModel = require('../../models').Parking;
const bd = require("../settings/db")
const jwt = require ("jsonwebtoken");
const Op = require('Sequelize').Op

exports.getBills = async (req, res) => {


    const token = req.cookies.jwt;
     const data = jwt.decode(token, 'Ckeeper')
     userId = data.data.id;
     const response = {};
      await bd.query(
        `SELECT Rents.id AS rentId, Rents.renter as renterId, Rents.tenant as tenantId,Rents.startDate, Rents.endDate, Bills.id AS billId, Bills.issueDate, Bills.type, Bills.amount, Parkings.id AS parkingId, Parkings.prize, Parkings.description, Parkings.height, Parkings.long, Parkings.width, Parkings.ubicationId, p1.user AS renter, p2.user AS tenant
        FROM Rents, Bills, Parkings, People p1, People p2 WHERE (Rents.renter ='${userId}' OR Rents.tenant ='${userId}') AND Bills.rentId = Rents.id AND Parkings.id = Rents.parkingId AND p1.id = Parkings.userId AND p2.id = Rents.tenant;
        `,
        [userId],(err, result)=>{
            if(err){
              res.json({
                error: 'Database error'
              })
            }else{
              const obj = {
                data :[...result],
                userId
              }
                res.json(obj)
            }
            
        });
        


    }

    //  const listRents =  await rentModel.findAll({
    //      [Op.or]: [{renter: data.data.id}, {tenant: data.data.id}]
    // }); 

    // const bills = [];
    // const places = [];
 
    // listRents.forEach(rent => {
    //     bills.push(billModel.findAll({
    //         where:{rentId:rent.id}  
    //     }))
    //     places.push(parkingModel.findAll({
    //         where:{id:rent.parkingId}}))});
        
    // Promise.all(places).then(result => {
    //     const placesData = result;
    //     Promise.all(bills).then(result => {
    //         const billsData = result;
        
    //         const response = {
    //             listRents,
    //             places: placesData,
    //             bills: billsData,
    //         }
    //         res.json(response);});
            
    
    // });

   
    
 
