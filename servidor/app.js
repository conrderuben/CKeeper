const express = require("express");
const app = express();
const mysql = require("mysql");
require("dotenv").config();

app.use(express.json());

const connection = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,

    // host:'localhost',
    // database:'ckeeper',
    // user:'root',
    // password:'root'


});

connection.connect((err) => {
    if(err) throw err;
    console.log("Conectado")
});

connection.query('SELECT * from persona', function(error, results, fields){
    if(error) throw error;

    results.forEach(result => {
        console.log(result);
    });
})


app.get("/", (req, res)=>{
    res.send("Que paisa");
});

app.listen(4000, ()=>{
    console.log("esto fufa");
})