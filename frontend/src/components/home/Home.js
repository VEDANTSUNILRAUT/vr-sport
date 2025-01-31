import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaChartLine,
  FaUsers,
  FaTrophy,
  FaCalendarAlt,
} from "react-icons/fa";
import "../../styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic (e.g., clearing auth tokens)
    navigate("/login");
  };

  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="profile">
          <FaUserCircle size={40} color="var(--secondary-color)" />
          <span>Welcome, User!</span>
        </div>
        <nav className="nav">
          <a href="#dashboard">
            <FaChartLine /> Dashboard
          </a>
          <a href="#teams">
            <FaUsers /> Teams
          </a>
          <a href="#matches">
            <FaTrophy /> Matches
          </a>
          <a href="#analytics">
            <FaCalendarAlt /> Analytics
          </a>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </header>

      {/* Main Dashboard */}
      <main className="dashboard">
        <h2>Dashboard Overview</h2>
        <div className="stats">
          <div className="stat-card">
            <h3>Total Teams</h3>
            <p>10 Teams</p>
          </div>
          <div className="stat-card">
            <h3>Upcoming Matches</h3>
            <p>2 Matches</p>
          </div>
          <div className="stat-card">
            <h3>Latest Performance</h3>
            <p>Team A - 5 wins, 2 losses</p>
          </div>
        </div>

        {/* Recent Activities */}
        <section className="recent-activities">
          <h3>Recent Activities</h3>
          <ul>
            <li>New match scheduled: Team A vs Team B</li>
            <li>Team C added 2 new players</li>
            <li>Upcoming event: Football Championship</li>
          </ul>
        </section>

        {/* Quick Access */}
        <section className="quick-access">
          <h3>Quick Access</h3>
          <div className="quick-access-buttons">
            <button onClick={() => navigate("/teams")}>
              <FaUsers /> Manage Teams
            </button>
            <button onClick={() => navigate("/matches")}>
              <FaTrophy /> Track Matches
            </button>
            <button onClick={() => navigate("/analytics")}>
              <FaChartLine /> Analyze Stats
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 SportsHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
