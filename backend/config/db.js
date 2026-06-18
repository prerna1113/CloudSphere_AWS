
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:"mysql",
    user:"root",
    password:"root123",
    database:"cloudsphere_hrms"


});

connection.connect((err)=>{
    if(err){
        console.error("Database connection failed:" ,err);
        return;
    }

    console.log("MySQL Connected Successfully");
});

module.exports = connection;