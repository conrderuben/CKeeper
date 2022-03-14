const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')

//Instalamos el cors para que no nos de el error de consola
const cors = require('cors');

//Importo la conexion a la bd
const pool = require('./settings/db')

//Obtengo el path
const path = require('path');
//importo el router app
const  router = require('./routes/app');

//Inicio express
const app = express();

//Aqui establezco el puerto
app.set('port', process.env.PORT || 4000);

//Motor de busqueda
app.set('view engine', 'ejs');

//Aqui le digo donde estan las rutas
app.set('views', __dirname + '/views');

// middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('dev'));


//rutas app
app.use('/', router);



app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'))
});