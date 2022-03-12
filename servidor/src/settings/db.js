 const mysql = require('mysql');
 const {database} = require('./keys');
 const {promisify} = require('util');


 const pool = mysql.createPool(database);

 pool.getConnection((err, conn) => {
     if(err){
         if(err.code == 'PROTOCOL_CONNECTION_LOST'){
            console.error('LA CONEXION DE LA BASE DE DATOS FUE CERRADA')
         } 
     
     if(err.code == 'ECONNREFUSED'){
         console.error('LA CONEXION DE LA BASE DE DATOS FUE RECHAZADA')
     }
    }
    if(conn) conn.release();
    console.log('Se ha conectado a clever cloud');
    return;
 });

 

 pool.query = promisify(pool.query);

 module.exports = pool;