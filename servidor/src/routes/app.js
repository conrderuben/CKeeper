const express = require('express');
const register = require('../controllers/registerController')
const parking = require('../controllers/placeController')
const vehicle = require('../controllers/vehicleController')
const user = require('../controllers/userController')
const login = require('../controllers/loginController')
const place = require('../controllers/placeController')
const app = express.Router();


// Página sign-in
app.post('/api/registro', register.register);

app.post('/api/login', login.login);

app.post('/api/add-parking', parking.addParking);

app.get('/api/get-vehicles', vehicle.getAll);

app.get('/api/get-vehicles/:id', vehicle.getById);

app.get('/api/get-user-by-id:id', user.getById);

app.get('/api/user', user.getUser);

app.get('/api/get-brand-by-id/:idMarca', vehicle.getBrandById);

app.get('/api/get-posts', place.getAllPublic);

module.exports = app;