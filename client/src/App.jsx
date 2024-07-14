import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Homepage from "./pages/Homepage";
import StudentDashboard from "./pages/StudentDashboard";
import Profile from "./components/Profile";
import Classes from "./components/Classes";
import Exams from "./components/Exams";
import Marks from "./components/Marks";
import Events from "./components/Events";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";
import Attendance from "./components/Attendence";
import TeacherDashboard from "./pages/teacherPages/TeacherDashboard";
import ClassSchedule from "./components/teacherComponents/ClassSchedule";
import Assignments from "./components/teacherComponents/Assignments";
import Students from "./components/teacherComponents/Students";
import Gradebook from "./components/teacherComponents/GradeBook";
import Resources from "./components/teacherComponents/Resources";
import Feedback from "./components/teacherComponents/Feedback";
import Announcements from "./components/teacherComponents/Announcements";
import StudentExamDashboard from "./pages/examPages/StudentExamDashboard";
import UpcomingExams from "./components/examComponents/UpcomingExams";
import OngoingExams from "./components/examComponents/OngoingExams";
import PreviousExams from "./components/examComponents/PreviousExams";
import ExamPage from "./components/examComponents/ExamPage";
import ExamMarks from "./pages/examPages/ExamMarks";
import AllUpcomingExams from "./components/examComponents/AllUpcomingExams";
import AllOngoingExams from "./components/examComponents/AllOngoingExams";
import AllPreviousExams from "./components/examComponents/AllPreviousExams";

function App() {
  return (
    <div className="main-content">
      <BrowserRouter>
        <div className="main">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/admin-dashboard" element={<Homepage />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/marks" element={<Marks />} />
            <Route path="/events" element={<Events />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/pagenotfound" element={<PageNotFound />} />
            <Route path="/*" element={<PageNotFound />} />
            {/* teacher routes */}
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/class-schedule" element={<ClassSchedule />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/exam" element={<Exams />} />
            <Route path="/students" element={<Students />} />
            <Route path="/gradebook" element={<Gradebook />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/announcements" element={<Announcements />} />

            {/* exam routes */}
            <Route
              path="/student-exam-dashboard"
              element={<StudentExamDashboard />}
            />
            <Route path="/upcoming-exams" element={<UpcomingExams />} />
            <Route path="/all-upcoming-exams" element={<AllUpcomingExams />} />
            <Route path="/all-ongoing-exams" element={<AllOngoingExams />} />
            <Route path="/all-previous-exams" element={<AllPreviousExams />} />
            <Route path="/ongoing-exams" element={<OngoingExams />} />
            <Route path="/previous-exams" element={<PreviousExams />} />
            <Route path="/exam/:id" element={<ExamPage />} />
            <Route path="/exam-marks" element={<ExamMarks />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
