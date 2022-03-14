const express = require('express');
const register = require('../controllers/registerController')
const parking = require('../controllers/parkingController')
const app = express.Router();


// Página sign-in
app.post('/api/registro', register.register);

app.post('/api/add-parking', parking.addParking);

module.exports = app;