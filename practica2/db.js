const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'practica2'
});

conexion.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Base de datos conectada");
    }
});

module.exports = conexion;