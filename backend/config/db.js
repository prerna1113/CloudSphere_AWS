const mysql = require("mysql2");

function connectDB() {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST || "mysql",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root123",
    database: process.env.DB_NAME || "cloudsphere_hrms",
  });

  connection.connect((err) => {
    if (err) {
      console.log("MySQL not ready. Retrying in 5 seconds...");
      setTimeout(connectDB, 5000);
      return;
    }

    console.log("MySQL Connected Successfully");
  });

  return connection;
}

module.exports = connectDB();