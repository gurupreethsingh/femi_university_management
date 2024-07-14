import React from "react";
import Header from "../../components/Header";
import DashboardOverview from "../../components/teacherComponents/DashboardOverview";
import Courses from "../../components/teacherComponents/Courses";
import ClassSchedule from "../../components/teacherComponents/ClassSchedule";
import Assignments from "../../components/teacherComponents/Assignments";
import Exams from "../../components/Exams";
import TeacherSidebar from "../../components/teacherComponents/TeacherSidebar";
import Attendence from "../../components/Attendence";
import Students from "../../components/teacherComponents/Students";
import Gradebook from "../../components/teacherComponents/GradeBook";
import Resources from "../../components/teacherComponents/Resources";
import Feedback from "../../components/teacherComponents/Feedback";
import Announcements from "../../components/teacherComponents/Announcements";

const TeacherDashboard = () => {
  return (
    <div className="flex">
      <TeacherSidebar />
      <div className="flex-1">
        <Header />
        <div className="min-h-screen bg-gray-100 p-6">
          <DashboardOverview />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <Courses />
            <ClassSchedule />
            <Assignments />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Exams />
            <Attendence />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Students />
            <Gradebook />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Resources />
            <Feedback />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Announcements
            </h2>
            <Announcements />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
