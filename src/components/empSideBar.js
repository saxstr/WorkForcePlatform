import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaTasks, FaClipboardCheck, FaEnvelope, FaSignOutAlt } from "react-icons/fa";
import "./empSideBar.css"; 
import logo from "../Assets/logo.png";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate(); 

  
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Ministry of Education" className="logo" />
      </div>
      
      <ul>
      <li className={location.pathname === "/dashboard" ? "active" : ""}>
      <Link to="/login" className="home-btn">
            <FaHome className="icon" /> الصفحة الرئيسية
          </Link>
        </li>
        <div className="divider"></div>

        <li className={location.pathname === "/dashboard/employee" ? "active" : ""}>
          <Link to="/dashboard/employee">
            <FaUser className="icon" /> بيانات الموظف
          </Link>
        </li>
        <div className="divider"></div>

        <li className={location.pathname === "/dashboard/tasks" ? "active" : ""}>
          <Link to="/dashboard/tasks">
            <FaTasks className="icon" /> إدارة المهام
          </Link>
        </li>
        <div className="divider"></div>

        <li className={location.pathname === "/dashboard/task-review" ? "active" : ""}>
          <Link to="/dashboard/task-review">
            <FaClipboardCheck className="icon" /> مراجعة المهام
          </Link>
        </li>
        <div className="divider"></div>

        <li className={location.pathname === "/dashboard/requests" ? "active" : ""}>
          <Link to="/dashboard/requests">
            <FaEnvelope className="icon" /> الطلبات
          </Link>
        </li>
        <div className="divider"></div>

        <li className={location.pathname === "/dashboard/logout" ? "active logout" : "logout"}>
          <Link to="/login">
            <FaSignOutAlt className="icon" /> تسجيل خروج
          </Link>
        </li>
      </ul>
    </div>
  );

  function EmpSidebar({ onLogin }) {
  return (
    <div className="sidebar">
      <button className="login-button1" onClick={onLogin}>
        دخول
      </button>
    </div>
  );
}
<div className="app-container">
  <Sidebar />
  <div className="content-area">
    {/* All the content goes here like <Employee /> */}
  </div>
</div>


};

export default Sidebar;
