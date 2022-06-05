const express = require('express');
const register = require('../controllers/registerController')
const parking = require('../controllers/placeController')
const vehicle = require('../controllers/vehicleController')
const rent = require('../controllers/rentController')
const user = require('../controllers/userController')
const admin = require('../controllers/adminController')
const session = require('../controllers/sessionController')
const place = require('../controllers/placeController')
const city = require('../controllers/cityController')
const middleware = require('../middlewares/authMiddleware');
const app = express.Router();



// Página sign-in
app.post('/api/registro', register.register);

app.post('/api/login', session.login);

app.get('/api/logout', session.logout);

app.post('/api/add-parking', parking.addParking);
app.post('/api/photos', parking.photos);


//app.post('/api/add-parking', parking.addParking);

app.get('/api/get-my-places', place.getPlacesByUserId);

app.get('/api/getPlacesById/:id', place.getPlacesById);

app.get('/api/get-place-with-data/:ubicationId/:userId', place.getPlacesData);

app.get('/api/setPublish/:parkingId/:value', place.setPublished);

app.get('/api/getAllCities', city.getAll)


// app.get('/api/get-vehicles', vehicle.getAll);

app.get('/api/get-vehicles',middleware.validateToken, vehicle.getById);

app.get('/api/get-user-by-id:id', user.getById);

app.get('/api/user', user.getUser); 

app.get('/api/edit-car/:carId', vehicle.editCar); 

app.get('/api/isAuth', user.validateToken);

app.get('/api/get-brand-by-id/:typeId', vehicle.getBrandById);

app.get('/api/get-posts', place.getAllPublic);

app.post ("/api/add-vehicle",vehicle.addCar);

app.post ("/api/create-rent",rent.createRent);


app.post ("/api/update-vehicle/:carId",vehicle.updateVehicle);

app.post ("/api/delete-vehicle/:carId",vehicle.deleteVehicle);

app.post ("/api/edit-place/:placeId",parking.editPlace);

app.post ("/api/edit-parking/:placeId/:ubicationId",parking.editParking);

app.post ("/api/delete-place/:placeId",parking.deletePlace);
//Admin
app.get('/api/getAllUsers', admin.getAllUsers);
app.get('/api/setActive/:userId/:value', admin.setActive);
app.get('/api/isAdmin', admin.isAdmin);



app.get('/api/list-cities',parking.getAll);
app.get('/api/list-brands',vehicle.getAllBrands);


app.get('/api/typeById/:brandId',vehicle.getTypeById);


module.exports = app;