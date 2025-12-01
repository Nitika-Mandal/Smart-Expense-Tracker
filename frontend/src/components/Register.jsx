import { useState } from "react";
import "../styles/App.css";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [err, setErr] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirm) {
      setErr("Please fill in all fields");
      return;
    }

    if (form.password !== form.confirm) {
      setErr("Passwords do not match");
      return;
    }

    setErr("");
    alert("Registration successful!");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Left Image */}
        <div className="login-image-section">
          <img src="/register-bg.jpg" alt="Register Background" className="login-bg" />
        </div>

        {/* Form Section */}
        <div className="login-form-section">
          <h1 className="login-title">Register</h1>
          {err && <p className="login-error">{err}</p>}

          <form onSubmit={submit} className="login-form">
            <h2 className="login-welcome">Create Your Account</h2>

            {/* Name */}
            <label className="login-label">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="login-input"
            />

            {/* Email */}
            <label className="login-label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="login-input"
            />

            {/* Password */}
            <label className="login-label">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              className="login-input"
            />

            {/* Confirm Password */}
            <label className="login-label">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={form.confirm}
              onChange={(e) =>
                setForm({ ...form, confirm: e.target.value })
              }
              className="login-input"
            />

            <button type="submit" className="login-btn">
              Register
            </button>
          </form>

          <div className="login-links center-links">
            <span>
              Already have an account?{" "}
              <a href="/login" className="login-link-right">
                Login
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
