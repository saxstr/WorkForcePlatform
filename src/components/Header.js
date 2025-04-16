import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; 
import './Header.css'; 

const Header = () => {
  const employeeName = " اسم الموظف| "; // 
  const jobTitle = "المنصب ";

  return (
    <div className="header-container">
      <div className="user-info">
        <FaUserCircle className="user-icon" />
        <div className="user-details">
          <span className="user-name">{employeeName}</span>
          <span className="user-title">{jobTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
