// src/components/Dashboard.js
import React from "react";
import { Link } from "react-router-dom"; // For navigation links\
import "../../styles/dashboard.css";

const Dashboard = () => {
  // Simulate fetching data (this could be dynamic data from your backend)
  const user = { name: "John Doe", role: "Player", email: "john@example.com" };
  const events = [
    { name: "Football Match", date: "2025-02-10", location: "Stadium A" },
    { name: "Basketball Tournament", date: "2025-02-15", location: "Arena B" },
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome, {user.name}</h1>
        <p>Role: {user.role}</p>
        <p>Email: {user.email}</p>
      </header>

      <div className="dashboard-body">
        <section className="upcoming-events">
          <h2>Upcoming Events</h2>
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                <h3>{event.name}</h3>
                <p>
                  {event.date} at {event.location}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <div>
            <Link to="/create-event" className="action-button">
              Create Event
            </Link>
            <Link to="/edit-profile" className="action-button">
              Edit Profile
            </Link>
            <Link to="/manage-teams" className="action-button">
              Manage Teams
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
