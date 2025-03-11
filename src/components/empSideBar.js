import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaTasks, FaClipboardCheck, FaEnvelope, FaSignOutAlt } from "react-icons/fa";
import "./empSideBar.css"; 
import logo from "../Assets/logo.png";

const Sidebar = () => {
  const location = useLocation(); 

  return (
    <div className="sidebar">
      <div className="sidebar-header">
      <img src={logo} alt="Ministry of Education" className="logo" />
      </div>

      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">
            <FaHome className="icon" /> الصفحة الرئيسية
          </Link>
        </li>
        <div className="divider"></div>

        <li className={location.pathname === "/employee" ? "active" : ""}>
          <Link to="/employees">
            <FaUser className="icon" /> بيانات الموظف
          </Link>
        </li>
        <div className="divider"></div>

        <li className={location.pathname === "/tasks" ? "active" : ""}>
          <Link to="/tasks">
            <FaTasks className="icon" /> إدارة المهام
          </Link>
        </li>
        <div className="divider"></div>

        <li className={location.pathname === "/review-tasks" ? "active" : ""}>
          <Link to="/review-tasks">
            <FaClipboardCheck className="icon" /> مراجعة المهام
          </Link>
        </li>
        <div className="divider"></div>

        <li className={location.pathname === "/requests" ? "active" : ""}>
          <Link to="/requests">
            <FaEnvelope className="icon" /> الطلبات
          </Link>
        </li>
        <div className="divider"></div>

        <li className={location.pathname === "/logout" ? "active logout" : "logout"}>
          <Link to="/logout">
            <FaSignOutAlt className="icon" /> تسجيل خروج
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
