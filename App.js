import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddPatient from "./pages/AddPatient";
import ViewPatients from "./pages/ViewPatients";
import UpdatePatient from "./pages/UpdatePatient";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddPatient />} />
        <Route path="/patients" element={<ViewPatients />} />
        <Route path="/update/:id" element={<UpdatePatient />} />
      </Routes>
    </Router>
  );
}

export default App;
