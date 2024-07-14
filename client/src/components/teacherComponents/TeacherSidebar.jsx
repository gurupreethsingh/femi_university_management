import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import ecoders_logo from "../../assets/ecoders_logo.png";

const TeacherSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex ${
        isOpen ? "w-64" : "w-20"
      } bg-gray-800 text-white transition-all duration-300`}
    >
      <div className="flex flex-col h-full w-100">
        <div className="flex items-center justify-between p-4 bg-gray-900">
          <div className="flex items-center">
            {isOpen ? (
              <img
                src={ecoders_logo}
                alt="Company Logo"
                className="h-8 w-auto"
              />
            ) : (
              <span className="text-xl font-bold">DB</span>
            )}
          </div>
          <button onClick={toggleSidebar}>
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <ul>
            <li className="mb-4">
              <Link
                to="/teacher-dashboard"
                className="flex items-center space-x-2"
              >
                <span>🏠</span>
                {isOpen && <span>Dashboard</span>}
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/profile" className="flex items-center space-x-2">
                <span>👤</span>
                {isOpen && <span>Profile</span>}
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/courses" className="flex items-center space-x-2">
                <span>📚</span>
                {isOpen && <span>Courses</span>}
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/class-schedule"
                className="flex items-center space-x-2"
              >
                <span>🗓️</span>
                {isOpen && <span>Class Schedule</span>}
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/assignments" className="flex items-center space-x-2">
                <span>📝</span>
                {isOpen && <span>Assignments</span>}
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/exams" className="flex items-center space-x-2">
                <span>📄</span>
                {isOpen && <span>Exams</span>}
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/attendance" className="flex items-center space-x-2">
                <span>✅</span>
                {isOpen && <span>Attendance</span>}
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/students" className="flex items-center space-x-2">
                <span>👨‍🎓</span>
                {isOpen && <span>Students</span>}
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/gradebook" className="flex items-center space-x-2">
                <span>📊</span>
                {isOpen && <span>Gradebook</span>}
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/resources" className="flex items-center space-x-2">
                <span>📁</span>
                {isOpen && <span>Resources</span>}
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/feedback" className="flex items-center space-x-2">
                <span>💬</span>
                {isOpen && <span>Feedback</span>}
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/announcements" className="flex items-center space-x-2">
                <span>📢</span>
                {isOpen && <span>Announcements</span>}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 bg-gray-900">
          <div className="flex items-center space-x-2">
            <img
              className="inline-block h-10 w-10 rounded-full"
              src="https://via.placeholder.com/40"
              alt="User avatar"
            />
            {isOpen && <span>User Name</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSidebar;
