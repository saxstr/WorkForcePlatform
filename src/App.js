import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LoginSelection from "./components/LoginSelection";
import EmployeeLogin from './components/EmployeeLogin';
import ManagerLogin from './components/ManagerLogin';
import Sidebar from "./components/empSideBar"; 
import Tasks from "./components/Tasks"; 
import TaskConfirm from "./components/TaskConfirm"; 
import TaskReview from './components/TaskReview';
import Employee from "./components/Employee";
import Requests from "./components/Requests";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login routes */}
        <Route path="/login" element={<LoginSelection />} />
        <Route path="/login/employees" element={<EmployeeLogin />} />
        <Route path="/login/managers" element={<ManagerLogin />} />

        {/* Dashboard layout route */}
        <Route
  path="/dashboard/*"
  element={
    <div className="app-container">
      <Sidebar />
      <div className="content-area">
        <Routes>
          <Route path="employee" element={<Employee />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="task-review" element={<TaskReview />} />
          <Route path="requests" element={<Requests/>} />
          <Route path="task-confirm" element={<TaskConfirm />} />
          <Route path="" />
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
