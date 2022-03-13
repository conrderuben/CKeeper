const express = require('express');
const registro = require('../controllers/registroController')
const app = express.Router();


// Página sign-in
app.post('/api/registro', registro.registro);

module.exports = app;