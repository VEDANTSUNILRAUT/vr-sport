import React from "react";
import "../../styles/landingpage.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/login");
  };
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1 className="logo">SportsHub</h1>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main-section">
        <h2 className="title">
          Welcome to <span>SportsHub</span>
        </h2>
        <p className="subtitle">
          Your one-stop solution for managing indoor and outdoor sports
        </p>
        <button className="cta-button" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </main>

      <section className="features-section" id="features">
        <h2 className="section-title">Features</h2>
        <div className="features-container">
          <div className="feature-card">
            <h3>Manage Teams</h3>
            <p>Organize and manage sports teams effortlessly.</p>
          </div>
          <div className="feature-card">
            <h3>Track Matches</h3>
            <p>Schedule, update, and monitor match details in real time.</p>
          </div>
          <div className="feature-card">
            <h3>Analyze Stats</h3>
            <p>Get insights into player and team performance with analytics.</p>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <p>&copy; 2025 SportsHub. All rights reserved.</p>
        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
