import { useState } from 'react';
import '../styles/Register.css'; // Assuming you have a separate CSS file for Register

const Register = () => {
  const [name, setName] = useState(''); // New state for Name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Registered:', { name, email, password });
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        {/* Logo above the registration form */}
        <div className="logo-container">
          <img src="/image/icon.png" alt="Logo" className="register-logo" />
        </div>

        <h2 className="register-title">User Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <button
            type="submit"
            className="register-button"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
