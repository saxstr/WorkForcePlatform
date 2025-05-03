import React from 'react';
import './Employee.css';

const Employee = () => {
  return (
    <div className="employee-page">
      <div className="employee-container">
        <h2 className="title">بيانات الموظف</h2>

        <form className="employee-form">
          {/* Personal Info Block */}
          <fieldset className="form-section">
            <legend>المعلومات الشخصية</legend>
            <div className="form-grid">
            <div>
                <label>أسم الموظف</label>
                <input type="text" placeholder="أدخل الاسم الثلاثي" />
              </div>
              <div>
                <label>السجل المدني</label>
                <input type="text" placeholder="أدخل رقم السجل المدني" />
              </div>
              <div>
                <label>تاريخ الميلاد</label>
                <input type="date" />
              </div>
              <div>
                <label>الجنس</label>
                <select>
                  <option>ذكر</option>
                  <option>أنثى</option>
                </select>
              </div>
              <div>
                <label>رقم الجوال</label>
                <input type="text" placeholder="05xxxxxxxx" />
              </div>
              <div>
                <label>كلمة المرور</label>
                <input type="password" />
              </div>
              <div>
                <label>الحالة الاجتماعية</label>
                <select>
                  <option>أعزب</option>
                  <option>متزوج</option>
                </select>
              </div>
              <div>
                <label>التخصص الدراسي</label>
                <select>
                  <option>حاسب آلي</option>
                  <option>رياضيات</option>
                  <option>لغة عربية</option>
                </select>
              </div>
            </div>
          </fieldset>

          {/* Job Info Block */}
          <fieldset className="form-section">
            <legend>المعلومات الوظيفية</legend>
            <div className="form-grid">
              <div>
                <label>المسمى الوظيفي</label>
                <select><option>معلم</option></select>
              </div>
              <div>
                <label>الفئة</label>
                <select><option>الفئة الأولى</option></select>
              </div>
              <div>
                <label>المرتبة/المستوى</label>
                <select><option>المستوى الأول</option></select>
              </div>
              <div>
                <label>المؤهل الدراسي</label>
                <select><option>بكالوريوس</option></select>
              </div>
              <div>
                <label>تاريخ التعيين بالوزارة</label>
                <input type="date" />
              </div>
              <div>
                <label>الإدارة التابعة لها</label>
                <select><option>الرياض</option></select>
              </div>
              <div>
                <label>اسم الإدارة</label>
                <input type="text" />
              </div>
              <div>
                <label>القسم</label>
                <input type="text" />
              </div>
            </div>
          </fieldset>

          {/* Achievements & Upload Block */}
          <fieldset className="form-section">
            <legend>إنجازات الموظف</legend>
            <div className="achievements-section">
              <div className="upload-box">
                <label className="upload-label">إرفاق السيرة الذاتية</label>
                <input type="file" accept=".png,.jpg,.gif" />
                <p className="upload-note">PNG, JPG, and GIF files are allowed</p>
              </div>
              <div className="achievements-form">
                <label>المسار</label>
                <input type="text" placeholder="مثال: ورشات، دراسة، خطة علاج" />

                <label>معيار الاختيار</label>
                <input type="text" />

                <label>علاقة الإنجاز بالأهداف الاستراتيجية للوزارة</label>
                <input type="text" />
              </div>
            </div>
            <button className="submit-btn" type="submit">حفظ</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Employee;
