/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './EmployeeLogin.css';
import educationLogo from "../Assets/educationLogo-white.png"; 


function EmployeeLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left side - Login Form */}
        <div className="login-form-container">
          <div className="login-header">
            <button className="back-button">
              <span>رجوع</span>
              <span className="back-arrow">←</span>
            </button>
          </div>

          <div className="login-form-content">
            <h1 className="login-title">تسجيل دخول</h1>
            <p className="login-subtitle">ادخل البريد الإلكتروني وكلمة المرور لتسجيل الدخول!</p>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="mail@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">كلمة المرور</label>
                <div className="password-input-wrapper">
                  <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="password-requirements">Min. 8 characters</div>
                  <button type="button" className="toggle-password">
                    {/* Eye icon SVG */}
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0C5.45455 0 1.57273 2.90909 0 7C1.57273 11.0909 5.45455 14 10 14C14.5455 14 18.4273 11.0909 20 7C18.4273 2.90909 14.5455 0 10 0ZM10 11.6667C7.49091 11.6667 5.45455 9.58333 5.45455 7C5.45455 4.41667 7.49091 2.33333 10 2.33333C12.5091 2.33333 14.5455 4.41667 14.5455 7C14.5455 9.58333 12.5091 11.6667 10 11.6667ZM10 4.2C8.50909 4.2 7.27273 5.46667 7.27273 7C7.27273 8.53333 8.50909 9.8 10 9.8C11.4909 9.8 12.7273 8.53333 12.7273 7C12.7273 5.46667 11.4909 4.2 10 4.2Z" fill="#A0AEC0"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="form-options">
                <div className="remember-me">
                  <label className="checkbox-container">
                    <input 
                      type="checkbox" 
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span className="checkmark"></span>
                    <span>Keep me logged in</span>
                  </label>
                </div>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>

              <button type="submit" className="login-button1">دخول</button>
            </form>
          </div>
        </div>

        {/* Right side - Branding */}
        <div className="branding-container1">
             <img 
              src={educationLogo} 
              alt="Ministry of Education Logo" 
              className="ministry-logo"
            />
          <div className="tagline">معاً نحو مستقبل رقمي واعد</div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeLogin;