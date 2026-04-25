// controllers/patientController.js
const db = require("../models/db"); // Make sure path is correct
const addPatient = (req, res) => {
  const { name, age,  disease } = req.body;
  if (!name || !age || !gender || !disease) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = "INSERT INTO patients (name, age,  disease) VALUES (?, ?, ?)";
  db.query(query, [name, age,  disease], (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.status(201).json({ message: "Patient added successfully", patientId: result.insertId });
  });
};

const viewPatients = (req, res) => {
  db.query("SELECT * FROM patients", (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json(result);
  });
};

const updatePatient = (req, res) => {
  const { id } = req.params;
  const { name, age, disease } = req.body;
  const query = "UPDATE patients SET name=?, age=?, disease=? WHERE id=?";
  db.query(query, [name, age, disease, id], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: "Patient updated successfully" });
  });
};

const deletePatient = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM patients WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: "Patient deleted successfully" });
  });
};

module.exports = { addPatient, viewPatients, updatePatient, deletePatient };