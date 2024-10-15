import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";

function App() {
  return (
    <Router>
      <div>
        <h1>Mafia Assistant</h1>
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<div>Welcome to Mafia Assistant!</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
