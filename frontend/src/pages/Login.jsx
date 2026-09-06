import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  setEmailError("");
  setPasswordError("");

  let isValid = true;

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

  if (!isValid) {
    return;
  }

  navigate("/dashboard");
};

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="form-header">
        <h1>Support Ticket System</h1>
        <p>Welcome back! Please login to your account.</p>
        </div>
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Email Address: </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

        </form>

        <div className="register-section">
          <p>
            Don't have an account?
            <a href="/register"> Register</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;