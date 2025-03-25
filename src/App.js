import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Sidebar from "./components/empSideBar"; 
import Tasks from "./components/Tasks";
import TaskConfirm from "./components/TaskConfirm"; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />  {/* السايدبار هنا */}
        <div className="content">
          <Routes>
            {/* تعريف المسارات المختلفة */}
            <Route path="/" element={<h1>الصفحة الرئيسية</h1>} />
            <Route path="/employee" element={<h1>بيانات الموظف</h1>} />
            <Route path="/tasks" element={<Tasks />} /> {/* صفحة المهام */}
            <Route path="/review-tasks" element={<h1>مراجعة المهام</h1>} />
            <Route path="/requests" element={<h1>الطلبات</h1>} />
            <Route path="/logout" element={<h1>تسجيل الخروج</h1>} />
            <Route path="/TaskConfirm" element={<TaskConfirm />} />  {/* صفحة التأكيد */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
