
const peopleModel = require('../../models').People;
const jwt = require('jsonwebtoken');

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

    exports.isAdmin = (req, res) => {
        const token = req.cookies.jwt;
        if (typeof token != "undefined") {
    
            jwt.verify(token, 'Ckeeper', (err, data) => {
                const info = jwt.decode(token, 'Ckeeper')
                if (!err && info.data.type ==='admin') {
                    res.send({isAdmin: true})
                } else {
                    console.log(err)
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
