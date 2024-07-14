import React from "react";
import Header from "../../components/Header";
import UpcomingExams from "../../components/examComponents/UpcomingExams";
import OngoingExams from "../../components/examComponents/OngoingExams";
import PreviousExams from "../../components/examComponents/PreviousExams";
import StudentExamSidebar from "../../components/examComponents/StudentExamSidebar";

const StudentExamDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <StudentExamSidebar />
        <div className="flex-1 bg-gray-100 p-5 overflow-auto">
          <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Upcoming Exams
              </h2>
              <UpcomingExams />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ongoing Exams
              </h2>
              <OngoingExams />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Previous Exams
              </h2>
              <PreviousExams />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentExamDashboard;
