const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // ✅ MUST HAVE

// ✅ ROUTES IMPORT
const userRoutes = require("./routes/userRoutes");
const patientRoutes = require("./routes/patientRoutes");

// ✅ ROUTES USE
app.use("/api/users", userRoutes);
app.use("/api/patients", patientRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
