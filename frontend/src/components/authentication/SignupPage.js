import React, { useState } from "react";
import { Link } from "react-router-dom"; // For routing
import "../../styles/signup.css"; // Importing signup-specific CSS

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError("All fields are required");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      // Handle signup logic here (API call or other)
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Signup</h1>
      </header>
      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
        <div>
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      <footer>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </footer>
    </div>
  );
};

export default SignupPage;
