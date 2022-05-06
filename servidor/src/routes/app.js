const express = require('express');
const register = require('../controllers/registerController')
const parking = require('../controllers/placeController')
const vehicle = require('../controllers/vehicleController')
const user = require('../controllers/userController')
const session = require('../controllers/sessionController')
const place = require('../controllers/placeController')
const middleware = require('../middlewares/authMiddleware');
const app = express.Router();



// Página sign-in
app.post('/api/registro', register.register);

app.post('/api/login', session.login);

app.get('/api/logout', session.logout);

app.post('/api/add-parking', parking.addParking);
app.post('/api/photos', parking.photos);


//app.post('/api/add-parking', parking.addParking);

app.get('/api/get-my-places', place.getPlacesById);

// app.get('/api/get-vehicles', vehicle.getAll);

app.get('/api/get-vehicles',middleware.validateToken, vehicle.getById);

app.get('/api/get-user-by-id:id', user.getById);

app.get('/api/user', user.getUser);

app.get('/api/isAuth', user.validateToken);

app.get('/api/get-brand-by-id/:brandId', vehicle.getBrandById);

app.get('/api/get-posts', place.getAllPublic);

//Admin
app.get('/api/getAllUsers', user.getAllUsers);

app.get('/api/isAdmin', user.isAdmin);
app.get('/api/list-cities',parking.getAll);
app.get('/api/list-brands',vehicle.getAllBrands);
app.get('/api/typeById/:brandId',vehicle.getTypeById);



module.exports = app;