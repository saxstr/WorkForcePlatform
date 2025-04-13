import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"; // لاستخدام التنقل
import "./Tasks.css";

const TaskConfirm = () => {
  const [tasksData, setTasksData] = useState([]);
  const navigate = useNavigate(); // استخدام التنقل بين الصفحات

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("tasksData"));
    if (storedData) {
      setTasksData(storedData); 
    } else {
      navigate("/tasks"); 
    }
  }, [navigate]);

  const handleSave = () => {
    alert("تم حفظ البيانات");
    localStorage.removeItem("tasksData"); 
  };

  const handlePrevious = () => {
    localStorage.setItem("tasksData", JSON.stringify(tasksData)); 

    navigate("/dashboard/tasks"); 
  };

  return (
    <div className="tasks-container ">
      <h2 className="title">تأكيد المهام</h2>
      <table className="tasks-table">
        <thead>
          <tr>
            <th>العمليات الرئيسية</th>
            <th>العمليات الداخلية</th>
            <th>الوزن النسبي للعملية</th>
            <th>الوقت المستغرق</th>
            <th>تردد العملية</th>
            <th>تكرار العملية</th>
          </tr>
        </thead>
        <tbody>
          {tasksData.map((task, index) => (
            <tr key={index}>
              <td>{task.mainOp}</td>
              <td>{task.subOp}</td>
              <td>{task.weight}</td>
              <td>{task.duration}</td>
              <td>{task.frequency}</td>
              <td>{task.repeat}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* تعديل تنسيق الأزرار لتكون في أطراف الصفحة */}
      <div className="buttons-container">
      <button className="save-button" onClick={handleSave}>حفظ</button>
      <button className="previous-button" onClick={handlePrevious}>السابق</button>
      </div>
    </div>
  );
};

export default TaskConfirm;
