import { useState } from "react";
import "../assets/css/Login.css";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");
    setLoginError("");

    let isValid = true;

    // Email validation
    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    // Password validation
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    // Stop if frontend validation fails
    if (!isValid) {
      return;
    }

    // Login API
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            password: password,
          }),
        }
      );

      const data = await response.json();

      // Backend error
      if (!response.ok) {
        setLoginError(data.message || "Login failed");
        return;
      }

      // Login successful
      alert("Login successful!");
      navigate("/dashboard");

    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Unable to connect to server");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="form-header">
          <h1>Support Ticket System</h1>
          <p>Welcome back! Please login to your account.</p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="form-group">
            <label>Email Address:</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {emailError && (
              <p className="error-message">
                {emailError}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password:</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {passwordError && (
              <p className="error-message">
                {passwordError}
              </p>
            )}

            {/* Backend login error */}
            {loginError && (
              <p className="login-error">
                {loginError}
              </p>
            )}
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
            <Link to="/register"> Register</Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;