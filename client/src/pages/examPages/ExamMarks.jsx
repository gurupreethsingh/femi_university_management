import React from "react";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import * as XLSX from "xlsx";
import Header from "../../components/Header";
import StudentExamSidebar from "../../components/examComponents/StudentExamSidebar";

const exams = [
  { id: 1, name: "Math Exam", date: "2023-12-01" },
  { id: 2, name: "Physics Exam", date: "2023-12-05" },
  // Add more exams as needed
];

const handlePrintPDF = (exam) => {
  const doc = new jsPDF();
  doc.text(`Marks for ${exam.name}`, 10, 10);
  // Add more details and formatting as needed
  doc.save(`${exam.name}_marks.pdf`);
};

const handleExportExcel = (exam) => {
  const worksheet = XLSX.utils.json_to_sheet([
    { Exam: exam.name, Date: exam.date, Marks: "Sample Marks" },
  ]);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Marks");
  XLSX.writeFile(workbook, `${exam.name}_marks.xlsx`);
};

const ExamMarks = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <StudentExamSidebar />
        <div className="flex-1 bg-gray-100 p-5 overflow-auto">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Exam Marks
            </h2>
            <div>
              {exams.map((exam) => (
                <div
                  key={exam.id}
                  className="block p-4 mb-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200"
                >
                  <h3 className="text-lg font-semibold">{exam.name}</h3>
                  <p className="text-gray-600">{exam.date}</p>
                  <div className="flex mt-4 space-x-2">
                    <button
                      onClick={() => handlePrintPDF(exam)}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    >
                      Print PDF
                    </button>
                    <button
                      onClick={() => handleExportExcel(exam)}
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                    >
                      Export to Excel
                    </button>
                    <Link
                      to={`/feedback/${exam.id}`}
                      className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700"
                    >
                      Feedback
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamMarks;
