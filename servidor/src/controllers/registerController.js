const bd = require("../settings/db")
const peopleModel = require('../../models').People;

//Bcrytp for the hashing
const bcrypt = require('bcrypt')
const saltRounds = 10;

exports.register = (req, res) => {

const data={
    user:req.body.user,
    password:req.body.password,
    name:req.body.name,
    surname:req.body.surname,
    bornDate:req.body.bornDate,
    mail:req.body.mail,
    phone:req.body.phone,


}

    bcrypt.hash(data.password, saltRounds, (err, hash)=>{
        if(err){
        }
            const obj = {...data, password:hash,active:1 }
            peopleModel.create(obj)
        .then((data)=>{

        }).catch((err)=>{
         })
        
    }

    )
    res.redirect("http://localhost:3000/login")
}