import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // For routing
import "../../styles/login.css"; // Importing login-specific CSS

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required");
    } else {
      setError("");
      // Handle login logic here (API call or other)
    }
  };

  const handleLogin = () => {
    // Replace this with your actual login logic
    const isLoginSuccessful = email === "user@gmail.com" && password === "1234";

    if (isLoginSuccessful) {
      // Redirect to home page
      navigate("/home");
    } else {
      // Handle invalid login, show error message, etc.
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Login</h1>
      </header>
      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
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
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
      <footer>
        <p>
          Don't have an account? <Link to="/signup">Register</Link>
        </p>
      </footer>
    </div>
  );
};

export default LoginPage;
