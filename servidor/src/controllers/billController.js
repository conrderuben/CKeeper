const bd = require("../settings/db")
const jwt = require ("jsonwebtoken");

exports.getBills = async (req, res) => {
    const token = req.cookies.jwt;
     const data = jwt.decode(token, 'Ckeeper')
     userId = data.data.id;
     const response = {};
      await bd.query(
        `SELECT Rents.id AS rentId, Rents.renter as renterId, Rents.tenant as tenantId,Rents.startDate, Rents.endDate, Bills.id AS billId, Bills.issueDate, Bills.type, Bills.amount, Parkings.id AS parkingId, Parkings.prize, Parkings.description, Parkings.height, Parkings.long,
         Parkings.width, Parkings.ubicationId, p1.user AS renter, p2.user AS tenant, p1.phone as renterPhone, p2.phone as tenantPhone, p1.mail as renterEmail, p2.mail as tenantEmail
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

   
    
 
