const express = require('express');
const public = require('../controllers/control')
const app = express.Router();



// Página inicial
app.get('/', public.inicio);

// Página sign-in
app.post('/api/registro', public.registro);

module.exports = app;