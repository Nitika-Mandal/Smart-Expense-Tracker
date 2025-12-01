import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setErr("Please fill in all fields");
      return;
    }

    setErr("");
    alert("Login clicked!");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* LEFT SIDE IMAGE */}
        <div className="login-image-section">
          <img src="/login-bg.jpg" alt="Login Background" className="login-bg" />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="login-form-section">
          <h1 className="login-title">Login</h1>

          {err && <p className="login-error">{err}</p>}

          <form onSubmit={submit} className="login-form">

            <h2 className="login-welcome">Welcome Back</h2>

            {/* EMAIL */}
            <label className="login-label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="login-input"
            />

            {/* PASSWORD */}
            <label className="login-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="login-input"
            />

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <div className="login-links">
            <a href="/forgot-password" className="login-link-left">
              Forgot password?
            </a>

            <span>
              Don’t have an account?{" "}
              <Link to="/register" className="login-link-right">
                Register
              </Link>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
