// controllers/userController.js
const db = require("../models/db");

exports.login = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email=? AND password=?";
  db.query(sql, [email, password], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });

    if (result.length > 0) {
      res.json({ user: result[0] }); // ✅ IMPORTANT
    } else {
      res.json({ message: "Invalid credentials" });
    }
  });
};