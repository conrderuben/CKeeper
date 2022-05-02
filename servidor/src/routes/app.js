const express = require('express');
const register = require('../controllers/registerController')
const parking = require('../controllers/parkingController')
const vehicle = require('../controllers/vehicleController')
const user = require('../controllers/userController')
const login = require('../controllers/loginController')
const app = express.Router();



// Página sign-in
app.post('/api/registro', register.register);


app.post('/api/add-parking', parking.addParking);
app.post('/api/photos', parking.photos);



app.get('/api/login', login.login )

//app.post('/api/add-parking', parking.addParking);

app.get('/api/get-vehicles', vehicle.getAll);

app.get('/api/get-user-by-id:id', user.getById);

app.get('/api/list-cities',parking.getAll);

module.exports = app;