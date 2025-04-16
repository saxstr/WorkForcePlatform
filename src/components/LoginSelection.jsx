// src/components/LoginSelection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSelection.css';
import visionLogo from "../Assets/ministryOfEducationLogo.png";

const LoginSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="login-selection-container">
     

      <div className="login-selection-card">
        <div className="logo-section">
        <img src={visionLogo} alt="Vision 2030 Logo" className="vision-logo" />
        </div>

        <div className="content-section">
          <h1 className="welcome-text">اهلا بكم في منصة إدارة الأعباء لـ365ـيوم</h1>
          <p className="welcome-description">
            حيث نرتقي بالكفاءة، نحقق الإنتاجية، وندعم اتخاذ القرار بذكاء.
          </p>

          <div className="selection-buttons">
            <div className="button-card" onClick={() => navigate('/login/employees')}>
              <h2 className="button-title">موظفين</h2>
              <p className="button-description">إداري/معلم/مشرف تابع لإدارة التعليم</p>
              <div className="login-button1">
                <span>دخول</span>
                <span className="arrow">←</span>
              </div>
            </div>

            <div className="button-card" onClick={() => navigate('/login/managers')}>
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