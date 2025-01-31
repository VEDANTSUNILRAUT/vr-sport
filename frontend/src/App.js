import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes for v6
import "./styles/global.css"; // Import global styles
import "./App.css";

//Components
import LandingPage from "./components/landing/LandingPage";
import Dashboard from "./components/dashboard/Dashboard";

// Authetication
import LoginPage from "./components/authentication/LoginPage";
import SignupPage from "./components/authentication/SignupPage";

// Home
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Use 'element' prop to render the components */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
