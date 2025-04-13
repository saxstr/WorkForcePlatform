import React, { useState } from "react";
import Sidebar from './empSideBar';
import "./TaskReview.css";

const TaskReview = () => {
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    mainOp: '',
    subOp: '',
  });

  const [showTable, setShowTable] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    setShowTable(true); // إظهار الجدول بعد الضغط على "بحث"
  };

  const tableData = [
    { mainOp: "عملية 1", subOp: "عملية فرعية 1", repeat: 3, frequency: "يومي", duration: 5 },
    { mainOp: "عملية 2", subOp: "عملية فرعية 2", repeat: 2, frequency: "أسبوعي", duration: 4 },
  ];

  return (
    <div className="task-review-container">
      <Sidebar />
      <div className="content">
        <h2>مراجعة المهام</h2>

        <div className="filter-container">
          <div className="filter">
            <label>من تاريخ:</label>
            <input type="date" name="startDate" value={filters.startDate} onChange={handleFilterChange} />
          </div>

          <div className="filter">
            <label>إلى تاريخ:</label>
            <input type="date" name="endDate" value={filters.endDate} onChange={handleFilterChange} />
          </div>

          <div className="filter">
            <label>العملية الرئيسية:</label>
            <select name="mainOp" value={filters.mainOp} onChange={handleFilterChange}>
              <option value="">اختر عملية</option>
              <option value="عملية 1">عملية 1</option>
              <option value="عملية 2">عملية 2</option>
            </select>
          </div>

          <div className="filter">
            <label>العملية الداخلية:</label>
            <select name="subOp" value={filters.subOp} onChange={handleFilterChange}>
              <option value="">اختر عملية فرعية</option>
              <option value="عملية فرعية 1">عملية فرعية 1</option>
              <option value="عملية فرعية 2">عملية فرعية 2</option>
            </select>
          </div>

          <button className="search-button" onClick={handleSearch}>بحث</button>
        </div>

        {showTable && (
          <table className="task-table">
            <thead>
              <tr>
                <th>العملية الرئيسية</th>
                <th>العملية الداخلية</th>
                <th>التكرار</th>
                <th>التاريخ</th>
                <th>الوقت المستغرق</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td>{data.mainOp}</td>
                  <td>{data.subOp}</td>
                  <td>{data.repeat}</td>
                  <td>{filters.startDate} إلى {filters.endDate}</td>
                  <td>{data.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <button className="save-button">حفظ</button>
      </div>
    </div>
  );
};

export default TaskReview;
