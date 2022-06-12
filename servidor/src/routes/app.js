const express = require('express');
const register = require('../controllers/registerController')
const vehicle = require('../controllers/vehicleController')
const rent = require('../controllers/rentController')
const user = require('../controllers/userController')
const admin = require('../controllers/adminController')
const session = require('../controllers/sessionController')
const place = require('../controllers/placeController')
const mail = require('../controllers/mailController')
const city = require('../controllers/cityController')
const bill = require('../controllers/billController')
const middleware = require('../middlewares/authMiddleware');
const app = express.Router();



// Página sign-in
app.post('/api/login', session.login);
app.post('/api/registro', register.register);
app.get('/api/logout', session.logout);

app.post('/api/add-parking', parking.addParking);


//app.post('/api/add-parking', parking.addParking);

//Places endpoints
app.get('/api/get-my-places', place.getPlacesByUserId);
app.get('/api/getPlacesById/:id', place.getPlacesById);
app.get('/api/get-place-with-data/:ubicationId/:userId', place.getPlacesData);
app.get('/api/setPublish/:parkingId/:value', place.setPublished);
app.get('/api/get-posts', place.getAllPublic);
app.post ("/api/edit-place/:placeId",place.editPlace);
app.post ("/api/edit-parking/:placeId/:ubicationId",place.editParking);
app.post ("/api/delete-place/:placeId",place.deletePlace);
app.get ("/api/parking-number/:userId",place.parkingNumber);
app.get('/api/list-cities',place.getAll);
app.post('/api/photos/:parkingId', place.photos);
app.post('/api/add-parking', place.addParking);

//Cities endpoints
app.get('/api/getAllCities', city.getAll)

//Vehicles endpoints
app.get('/api/get-vehicles',middleware.validateToken, vehicle.getById);
app.get('/api/view-cars/:user', vehicle.getByUserId);
app.get('/api/edit-car/:carId', vehicle.editCar); 
app.get('/api/get-brand-by-id/:typeId', vehicle.getBrandById);
app.post ("/api/add-vehicle",vehicle.addCar);
app.post ("/api/update-vehicle/:carId",vehicle.updateVehicle);
app.post ("/api/delete-vehicle/:carId",vehicle.deleteVehicle);
app.get('/api/list-brands',vehicle.getAllBrands);
app.get('/api/typeById/:brandId',vehicle.getTypeById);

//User endpoints
app.get('/api/get-user-by-id:id', user.getById);
app.get('/api/user', user.getUser); 
app.get('/api/isAuth', user.validateToken);

//Rent endpoints
app.post ("/api/create-rent",rent.createRent);
app.post('/api/photos/:parkingId', parking.photos);

app.post('/api/car-photo/:vehicleId', vehicle.photo);

//Bills endoints
app.get("/api/get-bill-data", bill.getBills)

//Profile endpoints
app.get("/api/number-data/:userId",user.numberData);
app.post ("/api/edit-user/",user.editUser);
app.post ("/api/edit-userPassword/",user.editUserPassword);

//Mail endpoints
app.post("/api/reset-password/:verificationCode",mail.resetPasswordCode)

//Admin
app.get('/api/getAllUsers', admin.getAllUsers);
app.get('/api/setActive/:userId/:value', admin.setActive);
app.get('/api/isAdmin', admin.isAdmin);


module.exports = app;