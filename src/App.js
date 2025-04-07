import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LoginSelection from "./components/LoginSelection";
import EmployeeLogin from './components/EmployeeLogin';
import ManagerLogin from './components/ManagerLogin';
import Sidebar from "./components/empSideBar"; 
import Tasks from "./components/Tasks";
import TaskConfirm from "./components/TaskConfirm"; 

function App() {
  return (
    <Router>
        {/* Default page is Login Selection */}
        <Route path="/" element={<LoginSelection />} />

        {/* Login Pages */}
        <Route path="/login/employees" element={<EmployeeLogin />} />
        <Route path="/login/managers" element={<ManagerLogin />} />
      
        {/* Dashboard (Only After Login) */}
        <Route
          path="/dashboard/*"
          element={
            <div className="app-container">
              <Sidebar />
              <div className="content">
                <Routes>
                  <Route path="/" element={<h1>الصفحة الرئيسية</h1>} />
                  <Route path="/employee" element={<h1>بيانات الموظفين</h1>} />
                  <Route path="/tasks" element={<Tasks />} />
                  <Route path="/review-tasks" element={<h1>مراجعة المهام</h1>} />
                  <Route path="/requests" element={<h1>الطلبات</h1>} />
                  <Route path="/logout" element={<h1>تسجيل الخروج</h1>} />
                  <Route path="/TaskConfirm" element={<TaskConfirm />} />  
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
