import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authApi";

import "../assets/css/Login.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setPasswordError("");
    setServerError("");

    let isValid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    if (!isValid) return;

    try {
      const data = await registerUser({ name, email, password });

      if (data.user) {
        navigate("/");   // go back to Login page after successful registration
      } else {
        setServerError(data.message || "Registration failed");
      }
    } catch (error) {
      setServerError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="form-header">
          <h1>Support Ticket System</h1>
          <p>Create an account to get started.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name: </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <p style={{ color: "red", fontSize: "13px" }}>{nameError}</p>}
          </div>

          <div className="form-group">
            <label>Email Address: </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p style={{ color: "red", fontSize: "13px" }}>{emailError}</p>}
          </div>

          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p style={{ color: "red", fontSize: "13px" }}>{passwordError}</p>}
          </div>

          {serverError && <p style={{ color: "red", fontSize: "13px" }}>{serverError}</p>}

          <button type="submit" className="login-button">
            Register
          </button>
        </form>

        <div className="register-section">
          <p>
            Already have an account?
            <Link to="/"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;