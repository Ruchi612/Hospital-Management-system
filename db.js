const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",    // or 127.0.0.1
  user: "root",
  password: "Root",      // must exactly match MySQL root password
  database: "hospital_db",
  port: 3306             // make sure MySQL is running on this port
});

db.connect((err) => {
  if (err) {
    console.log("DB Connection Error:", err);
  } else {
    console.log("✅ MySQL Connected!");
  }
});

module.exports = db;