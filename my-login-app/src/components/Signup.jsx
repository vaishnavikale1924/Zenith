// src/components/SignUp.jsx
import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation or API request logic here
    console.log("Form submitted", formData);
  };

  return (
    <div className="myntra-signup">
      <div className="image-section">
        {/* Image background */}
      </div>
      <div className="form-section">
        <form onSubmit={handleSubmit} className="signup-form">
          <h1>Create an Account</h1>
          
          {/* Full Name Field */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="signup-btn">
            Sign Up
          </button>

          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
