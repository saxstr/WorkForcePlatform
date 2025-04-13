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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to login */}
        
        {/* Login pages */}
        <Route path="/login" element={<LoginSelection />} />
        <Route path="/login/employees" element={<EmployeeLogin />} />
        <Route path="/login/managers" element={<ManagerLogin />} />

        {/* Dashboard with sidebar and content */}
        <Route path="/dashboard/*" 
          element={
            <div className="app-container">
              <Sidebar />
              <div className="content">
                <Routes>
                  <Route path="tasks" element={<Tasks />} />
                  <Route path="task-review" element={<TaskReview />} />
                  <Route path="requests" element={<h1>Requests</h1>} />
                  <Route path="task-confirm" element={<TaskConfirm />} />
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
