const express = require("express");
const router = express.Router();
const db = require("../models/db"); // ✅ DB import

// ✅ ADD PATIENT
router.post("/add", (req, res) => {
  console.log("REQ BODY:", req.body);

  const { name, age, disease } = req.body;

  if (!name || !age || !disease) {
    return res.status(400).send("All fields are required");
  }

  const sql = "INSERT INTO patients (name, age, disease) VALUES (?, ?, ?)";

  db.query(sql, [name, age, disease], (err, result) => {
    if (err) {
      console.log("DB ERROR:", err);
      return res.status(500).send("Database error");
    }

    res.send("Patient added successfully");
  });
});

// ✅ GET ALL PATIENTS (THIS IS NEW)
router.get("/", (req, res) => {
  db.query("SELECT * FROM patients", (err, result) => {
    if (err) {
      console.log("DB ERROR:", err);
      return res.status(500).send("Database error");
    }

    res.json(result); // 👈 send data to frontend
  });
});

module.exports = router;