// src/components/LoginSelection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSelection.css';

const LoginSelection = () => {
  const navigate = useNavigate();

  const handleNavigation = (userType) => {
    navigate(`/login/${userType}`);
  };

  return (
    <div className="login-selection-container">
      <div className="login-selection-card">
        <div className="logo-section">
          <img src="\Assets\ministryOfEducationLogo.png" alt="Vision 2030 Logo" className="vision-logo" />
        </div>

        <div className="content-section">
          <h1 className="welcome-text">اهلا بكم في منصة القوى العاملة</h1>
          <p className="welcome-description">
          حيث نرتقي بالكفاءة، نحقق الإنتاجية، وندعم اتخاذ القرار بذكاء.
          </p>

          <div className="selection-buttons">
            <div className="button-card" onClick={() => handleNavigation('employees')}>
              <h2 className="button-title">موظفين</h2>
              <p className="button-description">إداري/معلم/مشرف تابع لإدارة التعليم</p>
              <div className="login-button1">
                <span>دخول</span>
                <span className="arrow">←</span>
              </div>
            </div>

            <div className="button-card" onClick={() => handleNavigation('managers')}>
              <h2 className="button-title1">قيادات</h2>
              <p className="button-description">مدير عام للتعليم ومساعديه و مدراء الإدارات و رؤساء الأقسام و الوحدات</p>
              <div className="login-button">
                <span>دخول</span>
                <span className="arrow">←</span>
              </div>
            </div>

       
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSelection;