import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Tasks.css";
import Header from './Header';

// Define frequency values for different task types
const frequencyValues = {
  "يومي": 5,
  "أسبوعي": 25,
  "شهري": 154,
  "ربعي": 420,
  "نصف سنوي": 630,
  "سنوي": 1023
};

const Tasks = () => {
  const [tasks, setTasks] = useState([{
    mainOp: "", subOp: "", weight: "", duration: "", frequency: "", repeat: ""
  }]);

  const navigate = useNavigate(); // Navigate function is here

  // Handle changes in form fields
  const handleChange = (index, event) => {
    const newTasks = [...tasks];
    newTasks[index][event.target.name] =
      event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setTasks(newTasks);
  };

  // Add new task
  const addTask = () => {
    const newDate = new Date().toISOString().split('T')[0];  // إضافة التاريخ بشكل صحيح
    setTasks([
      ...tasks,
      { mainOp: "", subOp: "", weight: "", duration: "", frequency: "", repeat: "", date: newDate }
    ]);
  };
  

  // Handle the next button click
  const handleNext = () => {
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      if (!task.mainOp || !task.subOp || !task.duration || !task.frequency || !task.repeat) {
        alert("يرجى تعبئة جميع الحقول");
        return;
      }
  
      const actualFrequency = parseInt(task.duration) * parseInt(task.repeat);
      const maxAllowedFrequency = frequencyValues[task.frequency];
  
      if (actualFrequency > maxAllowedFrequency) {
        alert("خطأ: الرجاء التاكد من ادخال البيانات");
        return;
      }
    }
  
    localStorage.setItem("tasksData", JSON.stringify(tasks));
    localStorage.setItem("mainOperations", JSON.stringify(mainOperations));
    localStorage.setItem("subOperations", JSON.stringify(subOperations));
    console.log("Data saved to localStorage:", tasks);

    navigate("/dashboard/task-confirm");
  };
  
  
    // List of main operations
  const mainOperations = [
    "رصد المبكرللسلوكيات والظواهرالفكرية  في إدارة التعليم العامة والوحدات التنظيمية التابعة لها ودراسة مسبباتها واقتراح الأساليب المناسبة لمعالجتها والتعامل معها.",
    "رفع تقارير دورية لمدير عام التعليم أو الرفع الفوري عند الحاجة . في حالات المخالفات الفكرية أو السلوكية المرتبطة بها، وتقديم التوصيات المناسبة",
    "محاكاة المواقف من خلال إعداد لوائح العمل الداعمة لتوجيه الموظفين",
    "رصد المبكرللسلوكيات والظواهرالفكرية  في إدارة التعليم العامة والوحدات التنظيمية التابعة لها ودراسة مسبباتها واقتراح الأساليب المناسبة لمعالجتها والتعامل معها.",
    "تنفيذ الخطط و البرامج و المسابقات والحملات التوعوية الفكرية الموجهة للفئات المستهدفة. ",
    "رفع تقارير دورية لمدير عام التعليم أو الرفع الفوري عند الحاجة . في حالات المخالفات الفكرية أو السلوكية المرتبطة بها، وتقديم التوصيات المناسبة",
    "التعاون مع ادارة الموارد البشرية بشأن إطلاق برامج وحملات للتوعية الفكرية للموظفين في مختلف وحدات إدارة التعليم العامة",
    "الالتزام  بضوابط ومعايير ترشيح منسوبي أقسام الوعي الفكري بإدارة التعليم العامة وإدارات التعليم بالمحافظات التابعة لها.بالتنسيق مع القطاعات ذات العلاقة",
    "المشاركة في برامج تدريب المدربين ونشر وتعزيز الفكر الوسطي لمواجهة الانحرافات الفكرية",
    "الالتزام بمؤشرات أداء وحدات الوعي الفكري المعدة من قبل الإدارة العامة للوعي الفكري. وإعداد التقارير والتوصيات حيالها . وتطبيق أطر الخطط الوقائية لتحقيق هذه المؤشرات ",
    "التقيد بنماذج العمل (نماذج التقارير بأنواعها، الخطط السنوية للبرامج نماذج الرصد نماذج المعالجات، وغيرها). المعدة من قبل الإدارة العامة للوعي الفكري بالوزارة ",
  ];

    // Sub-operations for each main operation
  const subOperations = {
    "رصد المبكرللسلوكيات والظواهرالفكرية  في إدارة التعليم العامة والوحدات التنظيمية التابعة لها ودراسة مسبباتها واقتراح الأساليب المناسبة لمعالجتها والتعامل معها." :[
    "توثيق المخالفات الفكرية أو السلوكية والظواهر السلبية",    
    ],

    "رفع تقارير دورية لمدير عام التعليم أو الرفع الفوري عند الحاجة . في حالات المخالفات الفكرية أو السلوكية المرتبطة بها، وتقديم التوصيات المناسبة" :[
    "دراسة المخالفات الفكرية أو السلوكية والظواهر السلبية  ليتم تحديد نوعها وبالتالي يتم إعداد الخطة العلاجية وإقرارها واعتمادها.",
    ],

    "رصد المبكرللسلوكيات والظواهرالفكرية  في إدارة التعليم العامة والوحدات التنظيمية التابعة لها ودراسة مسبباتها واقتراح الأساليب المناسبة لمعالجتها والتعامل معها." :[
    "معالجة المخالفات من خلال الإجراءات القانونية والإدارية والارشادية في حدود الصلاحية .",
    "إعداد تقرير بالحالة وإقرار تقرير الحالة ومن ثم اعتماده واشعار الجهات المسؤولة ",
    "وضع الخطط الوقائية والعلاجية",
  ],

    "تنفيذ الخطط و البرامج و المسابقات والحملات التوعوية الفكرية الموجهة للفئات المستهدفة. " : [
    "جمع البيانات والمعلومات (تقارير وبرامج وانجازات العام السابق، البرامج والمسابقات والفعاليات المقترحة من الإدارات، التوجيهات والتعاميم الوزارية ودراسة البيانات  ",
    "الاعداد الاولي لبناء خطة الوعي الفكري وبناء مسودة خطة وإعداد وتصميم الفعاليات والبرامج والأنشطة والمسابقات.",
    "إعداد الخطة السنوية وإقرارها ومن ثم اعتمادها ونشرها ومتابعة تنفيذها",
  ],
    "رفع تقارير دورية لمدير عام التعليم أو الرفع الفوري عند الحاجة . في حالات المخالفات الفكرية أو السلوكية المرتبطة بها، وتقديم التوصيات المناسبة":[
    "جمع بيانات البرامج والأنشطة وفق الخطط المعتمدة وتقرير رصد المخالفات والظواهر السلبية",
    "إعداد التقرير واقراره واعتماده",
  ],

    "التعاون مع ادارة الموارد البشرية بشأن إطلاق برامج وحملات للتوعية الفكرية للموظفين في مختلف وحدات إدارة التعليم العامة":[
    "طلب الموافقة من المدير العام للتعليم واعتماد البرنامج والخطة الزمنية ",
  ],  
  
  "الالتزام  بضوابط ومعايير ترشيح منسوبي أقسام الوعي الفكري بإدارة التعليم العامة وإدارات التعليم بالمحافظات التابعة لها.بالتنسيق مع القطاعات ذات العلاقة":[
  "الرفع بالاحتياج من رئيس القسم  من الإدارة العامة للتعليم إلى  الإدارة العامة للوعي الفكري بالوزارة ",
  ],

  "المشاركة في برامج تدريب المدربين ونشر وتعزيز الفكر الوسطي لمواجهة الانحرافات الفكرية" :[
  "تأهيل فريق العمل ",
  "بناء الحقائب التدريبية شاملة لجميع مجالات الوعي الفكري",
  ],

  "الالتزام بمؤشرات أداء وحدات الوعي الفكري المعدة من قبل الإدارة العامة للوعي الفكري. وإعداد التقارير والتوصيات حيالها . وتطبيق أطر الخطط الوقائية لتحقيق هذه المؤشرات ": [
  "رصد جميع المؤشرات وشواهدها في التقرير الوارد من الإدارة العامة للوعي الفكري",
  ],

  "التقيد بنماذج العمل (نماذج التقارير بأنواعها، الخطط السنوية للبرامج نماذج الرصد نماذج المعالجات، وغيرها). المعدة من قبل الإدارة العامة للوعي الفكري بالوزارة ":[
  "رصد جميع المؤشرات وشواهدها في التقرير الوارد من الإدارة العامة للوعي الفكري",
  ],


  };


  return (
    <div className="tasks-container">
      <Header />
      <h2 className="title">إدارة المهام</h2>
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
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>
                <select
                  name="mainOp"
                  value={task.mainOp}
                  onChange={(e) => handleChange(index, e)}
                >
                  <option value="">اختر العملية الرئيسية</option>
                  {mainOperations.map((op, idx) => (
                    <option key={idx} value={op}>
                      {op}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <select
                  name="subOp"
                  value={task.subOp}
                  onChange={(e) => handleChange(index, e)}
                >
                  <option value="">اختر العملية الداخلية</option>
                  {task.mainOp &&
                    subOperations[task.mainOp]?.map((op, idx) => (
                      <option key={idx} value={op}>
                        {op}
                      </option>
                    ))}
                </select>
              </td>
              <td>
                <span>{task.weight || "القيمة المعطاة من المدير"}</span>
              </td>
              <td>
                <input
                  type="number"
                  name="duration"
                  placeholder="أدخل الوقت المستغرق"
                  value={task.duration}
                  onChange={(e) => handleChange(index, e)}
                />
              </td>
              <td>
              <select
                  name="frequency"
                  value={task.frequency}
                  onChange={(e) => handleChange(index, e)}
                >
                  <option value="">اختر التردد</option>
                  <option value="يومي">يومي</option>
                  <option value="أسبوعي">أسبوعي</option>
                  <option value="شهري">شهري</option>
                  <option value="ربعي">ربعي</option>
                  <option value="نصفي">نصفي</option>
                  <option value="سنوي">سنوي</option>
                </select>              </td>
              <td>
                <input
                  type="text"
                  name="repeat"
                  value={task.repeat}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="أدخل عدد التكرار"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="add-task" onClick={addTask}>+</button>

      <button className="next-button" onClick={handleNext}>
        التالي
      </button>    
      </div>
  );
};

export default Tasks;
