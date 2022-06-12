
const peopleModel = require('../../models').People;
const vehicleModel = require('../../models').Vehicle;
const parkingModel = require('../../models').Parking;
const rentModel = require('../../models').Rent;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.getById = async (req, res) => {
    const user=  await peopleModel.findOne({
        where:{id: req.params.id}
    });
   
    res.json(user);
}

exports.getUser = async (req, res) => {
     const token = req.cookies.jwt;

     const data = jwt.decode(token, 'Ckeeper')

     const user=  await peopleModel.findOne({
        where:{id: data.data.id}
    });
     res.send(user)
    
    
}
exports.getAllUsers = async (req, res) => {
    const token = req.cookies.jwt;
     const data = jwt.decode(token, 'Ckeeper')
     if(data.data.type === 'admin'){
        const users=  await peopleModel.findAll();
        res.send(users);
     }else{
        res.send({error: 'ForGiven'})
     }


   
}

exports.validateToken = (req, res) => {
    const token = req.cookies.jwt;
    if (typeof token != "undefined") {

        jwt.verify(token, 'Ckeeper', (err, data) => {
            if (!err) {
                res.send({isAuth: true})
            } else {
                console.log(err)
                // Token expirado
                res.send({error: "Token expired or wrong",
                isAuth: false});
            }
        })
    } else {
        // No hay token
        res.status(401).send(
            {error: 'ForGiven',
            isAuth: false}
            );
    }
}

   
exports.editUser = async (req, res) => {
        
await peopleModel.update({user:req.body.userData.user,name:req.body.userData.name,surname:req.body.userData.surname,password:req.body.userData.password,bornDate:req.body.userData.bornDate,mail:req.body.userData.mail,phone:req.body.userData.phone,},
{where:{id:req.body.userData.id}})
  
  

        
   
}
exports.editUserPassword = async (req, res) => {
    const saltRounds = 10;
    bcrypt.hash(req.body.userData.password, saltRounds, (err, hash)=>{
        if(err){
            console.log('error with the hash')
        }
         peopleModel.update({user:req.body.userData.user,name:req.body.userData.name,surname:req.body.userData.surname,password:hash,bornDate:req.body.userData.bornDate,mail:req.body.userData.mail,phone:req.body.userData.phone,},
            {where:{id:req.body.userData.id}})

    
    
    }
    )
}
exports.numberData = async (req, res) => {
        
    const idUser=req.params.userId;

    const numberPlaces =  await parkingModel.findAll({
        where:{userId:idUser}
    });
    const numberVehicles =  await vehicleModel.findAll({
        where:{userId:idUser} 
    });
    const numberTenant =  await rentModel.findAll({
        where:{renter:idUser} 
    });
    const numberRenter =  await rentModel.findAll({
        where:{tenant:idUser} 
    });
    const numberRents=(numberRenter.length) + (numberTenant.length)
    const obj={places:numberPlaces,vehicles:numberVehicles,rents:numberRents}
    res.send(obj);
      
      
    
            
       
    }