const billModel = require('../../models').Bill;

exports.getBillByUserId = async (req, res) => {
    const token = req.cookies.jwt;
     const data = jwt.decode(token, 'Ckeeper')
     const listBills =  await parkingModel.findAll({
        where:{userId:data.data.id}
    }); 
}