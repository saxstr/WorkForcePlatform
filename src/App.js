import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/empSideBar"; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<h1>الصفحة الرئيسية</h1>} />
            <Route path="/employee" element={<h1>بيانات الموظفين</h1>} />
            <Route path="/tasks" element={<h1>إدارة المهام</h1>} />
            <Route path="/review-tasks" element={<h1>مراجعة المهام</h1>} />
            <Route path="/requests" element={<h1>الطلبات</h1>} />
            <Route path="/logout" element={<h1>تسجيل الخروج</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
