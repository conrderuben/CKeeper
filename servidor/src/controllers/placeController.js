const bd = require("../settings/db")
const cityModel = require('../../models').City;
const ubicationModel = require('../../models').Ubication;
const parkingModel = require('../../models').Parking;
const peopleModel = require('../../models').People;
const multer = require('multer');
const path = require('path');
const cors = require ("cors");
const jwt = require ("jsonwebtoken")

exports.getAll = async (req, res) => {
    const listCities =  await cityModel.findAll();
   
    res.json(listCities);
}
exports.getAllPublic = async (req, res) => {
    const rentPlace =  await parkingModel.findAll({
        where:{
          published: true,
          rented: false,
        }
    });
   
    res.json(rentPlace);
}

exports.getPlacesByUserId = async (req, res) => {
    const token = req.cookies.jwt;
    const data = jwt.decode(token, 'Ckeeper')
    const listPlaces =  await parkingModel.findAll({
        where:{userId:data.data.id}
    });
   
    res.json(listPlaces);
}

exports.getPlacesById = async (req, res) => {
  const token = req.cookies.jwt;
  const data = jwt.decode(token, 'Ckeeper')
  const listPlaces =  await parkingModel.findAll({
      where:{userId:data.data.id}
  });
 
  res.json(listPlaces);
}

exports.getPlacesData = async (req, res) => {
  const ubi = await ubicationModel.findByPk(req.params.ubicationId)
  const city= await cityModel.findByPk(ubi.idCity)
  // console.log(city)
  const user = await peopleModel.findByPk(req.params.userId)
  
  const ownPlaceData={
    street: ubi.street,
    pc: ubi.postalCode,
    number: ubi.number,
    city: city.name,
    user_name: user.user,
    user_phone: user.phone,
    user_mail: user.mail
  }
 
  res.json(ownPlaceData);

}

exports.setPublished = async (req, res) => {
     parkingModel.update({published:req.params.value},
         {where:{id:req.params.parkingId}})
         
     res.send('Actualizado');
}




    

exports.addParking =  async (req,res) => {
    const token = req.cookies.jwt;
    const data = jwt.decode(token, 'Ckeeper')
    const form =req.body.obj.form;
    const dataUbication={
        id:0,
        street:form.street,
        postalCode:form.pc,
        number:form.number,
        idCity:form.cities,
}  
        //INSERT UBICATION
        let id=0
        await ubicationModel.create(dataUbication).then(result=>{id=result.id})
        

        //DATA PARKING
        const dataParking={
          prize:form.price,
          rented:false,
          published:false,
          description:form.description,
          height:form.height,
          long:form.long,
          width:form.width,
          photo:req.body.obj.cont,
          userId:data.data.id,
          ubicationId:id,
          created:null,
          updated:null,
          
        }
        //INSERT PARKING
        var parkingId=0
        await parkingModel.create(dataParking).then(result=>{parkingId=result.id})

        
        res.json({id:parkingId});

}
exports.photos = async (req,res,next)=> {
  const token = req.cookies.jwt;
  const data = jwt.decode(token, 'Ckeeper')
const usu=data.data.id;




    const storage = multer.diskStorage({
        destination:path.join( "../cliente/src/assets/users/"+usu+"/Parking"+req.params.parkingId+"/") ,
        filename: function (req, file, cb) {
          cb(
            null,
            "parking"+req.files.length + ".png",
          );
        },
      });

      const upload = multer({
        storage: storage,
        
     }).any("photos");

     upload(req, res, (err) => {
        if(!err)
           return res.send(200).end();
     });


}
exports.editPlace = async (req, res)=>{
  const place= await parkingModel.findByPk(req.params.placeId);

  const ubication= await ubicationModel.findByPk(place.ubicationId);
  
  

  const data = {place:place,ubication:ubication}
  // console.log(data)
  res.json(data);

}
exports.editParking = async (req, res)=>{
  await parkingModel.update({prize:req.body.obj.form.price,description:req.body.obj.form.description,height:req.body.obj.form.height,long:req.body.obj.form.long,width:req.body.obj.form.width},
    {where:{id:req.params.placeId}})
    console.log(req.params.ubicationId)
    await ubicationModel.update({street:req.body.obj.form.street,postalCode:req.body.obj.form.pc,number:req.body.obj.form.number,idCity:req.body.obj.form.cities},
      {where:{id:req.params.ubicationId}})
   

}

exports.deletePlace = async (req, res)=>{
    
  return parkingModel.destroy({
      where: { id: req.params.placeId }
     })
  

  }
  
   

exports.parkingNumber  =async (req, res)=>{
// console.log(req.params.userId)
const idUser=req.params.userId
  const listPlaces =  await parkingModel.findAll({
     where:{userId:idUser}
  });
// const numberParking = 
//    listPlaces.length

res.json(listPlaces);
}

