import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import StudentExamSidebar from "../../components/examComponents/StudentExamSidebar";

const ExamPage = () => {
  const { id } = useParams();

  // Fetch exam details using id
  // const exam = fetchExamDetails(id);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <StudentExamSidebar />
        <div className="flex-1 bg-gray-100 p-5 overflow-auto">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Exam Details
            </h2>
            <p className="text-gray-600">Details for exam ID: {id}</p>
            {/* Display exam details here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
