const peopleModel = require('../../models').People;
const jwt = require('jsonwebtoken');

exports.getAllUsers = async (req, res) => {
    const token = req.cookies.jwt;
     const data = jwt.decode(token, 'Ckeeper')
     if(data.data.type === 'admin'){
        const users=  await peopleModel.findAll();
        res.json(users);
     }else{
        res.send({error: 'ForGiven'})
     }  
}

exports.setActive = async (req, res) => {
    const token = req.cookies.jwt;
     const data = jwt.decode(token, 'Ckeeper')
     if(data.data.type === 'admin'){
        peopleModel.update({active:req.params.value},
            {where:{id:req.params.userId}})
            
        }
        res.send('Actualizado');
         
       
}
exports.isAdmin = (req, res) => {
    const token = req.cookies.jwt;
    if (typeof token != "undefined") {

        jwt.verify(token, 'Ckeeper', (err, data) => {
            const info = jwt.decode(token, 'Ckeeper')
            if (!err && info.data.type ==='admin') {
                res.send({isAdmin: true})
            } else {
                // Token expirado
                res.send({error: "Token expired or wrong",
                isAdmin: false});
            }
        })
    } else {
        // No hay token
        res.status(401).send(
            {error: 'ForGiven',
            isAdmin: false}
            );
    }
}