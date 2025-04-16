import React, { useState, useEffect } from "react";
import Sidebar from './empSideBar';
import "./TaskReview.css";

const TaskReview = () => {
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    mainOp: '',
    subOp: '',
  });

  const [tasks, setTasks] = useState([]); 
  const [showTable, setShowTable] = useState(false);
  const [mainOperations, setMainOperations] = useState([]); 
  const [subOperations, setSubOperations] = useState({}); 

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasksData"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
    const savedMainOperations = JSON.parse(localStorage.getItem("mainOperations"));
    if (savedMainOperations) {
      setMainOperations(savedMainOperations);
    }
    const savedSubOperations = JSON.parse(localStorage.getItem("subOperations"));
    if (savedSubOperations) {
      setSubOperations(savedSubOperations);
    }
  }, []);
  

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    if (filters.mainOp || filters.subOp) {
      setShowTable(true);
    } else {
      alert("يرجى تحديد العملية الرئيسية أو الفرعية للبحث");
    }
  };
  

// Function to format date as YYYY-MM-DD
const filteredTasks = tasks.filter((task) => {
  const taskDate = task.date ? new Date(task.date).toISOString().split('T')[0] : "";
  const startDate = filters.startDate ? new Date(filters.startDate).toISOString().split('T')[0] : "";
  const endDate = filters.endDate ? new Date(filters.endDate).toISOString().split('T')[0] : "";
  
  return (
    (filters.mainOp ? task.mainOp === filters.mainOp : true) &&
    (filters.subOp ? task.subOp === filters.subOp : true) &&
    // Allow filtering by date only if both start and end dates are provided
    (filters.startDate && filters.endDate
      ? taskDate >= startDate && taskDate <= endDate
      : true)
  );
});



  return (
    <div className="task-review-container">
      <Sidebar />
      <div className="content">
        <h2>مراجعة المهام</h2>
        <div className="filter-container">
          <div className="filter">
            <label>العملية الرئيسية:</label>
            <select name="mainOp" value={filters.mainOp} onChange={handleFilterChange}>
              <option value="">اختر العملية الرئيسية</option>
              {mainOperations.map((op, idx) => (
                <option key={idx} value={op}>
                  {op}
                </option>
              ))}
            </select>
          </div>
          <div className="filter">
            <label>العملية الداخلية:</label>
            <select name="subOp" value={filters.subOp} onChange={handleFilterChange}>
              <option value="">اختر العملية الفرعية</option>
              {filters.mainOp &&
                subOperations[filters.mainOp]?.map((op, idx) => (
                  <option key={idx} value={op}>
                    {op}
                  </option>
                ))}
            </select>
          </div>
          <div className="filter">
            <label>من تاريخ:</label>
            <input type="date" name="startDate" value={filters.startDate} onChange={handleFilterChange} />
          </div>
          <div className="filter">
            <label>إلى تاريخ:</label>
            <input type="date" name="endDate" value={filters.endDate} onChange={handleFilterChange} />
          </div>
          <button className="search-button" onClick={handleSearch}>بحث</button>
        </div>

        {showTable && (
          <table className="task-table">
          <thead>
            <tr>
              <th>العملية الرئيسية</th>
              <th>العملية الداخلية</th>
              <th>الوقت المستغرق</th>
              <th>تردد العملية</th>
              <th>تكرار العملية</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((data, index) => (
              <tr key={index}>
                <td>{data.mainOp}</td>
                <td>{data.subOp}</td>
                <td>{data.duration}</td>  
                <td>{data.frequency}</td>
                <td>{data.repeat}</td>
              </tr>
            ))}
          </tbody>
            <button className="save-button">تعديل</button>
          </table>
        )}

      </div>
    </div>
  );
};

export default TaskReview;
