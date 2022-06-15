const cityModel = require('../../models').City;

exports.getAll = async (req, res) => {
        const cities=  await cityModel.findAll();
        res.json(cities);
     
}  