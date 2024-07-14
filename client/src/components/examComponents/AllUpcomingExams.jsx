import React from "react";
import Header from "../../components/Header";
import StudentExamSidebar from "../../components/examComponents/StudentExamSidebar";
import UpcomingExams from "../../components/examComponents/UpcomingExams";

const AllUpcomingExams = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <StudentExamSidebar />
        <div className="flex-1 bg-gray-100 p-5 overflow-auto">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              All Upcoming Exams
            </h2>
            <UpcomingExams />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUpcomingExams;
