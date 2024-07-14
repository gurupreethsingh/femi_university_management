import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import ecoders_logo from "../assets/ecoders_logo.png";

const StudentSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Update the isOpen state based on window width
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    handleResize(); // Set the initial state based on window width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`flex flex-col bg-gray-800 text-white transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between p-2 bg-gray-900">
        <div className="flex items-center"></div>
        <button onClick={toggleSidebar}>
          {isOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto p-4 hide-scrollbar">
        <ul>
          <li className="mb-4">
            <Link
              to="/student-dashboard"
              className="flex items-center space-x-2 hover:text-white hover:bg-gray-700"
            >
              <span>🏠</span>
              {isOpen && <span>Dashboard</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/profile"
              className="flex items-center space-x-2 hover:text-white hover:bg-gray-700"
            >
              <span>👤</span>
              {isOpen && <span>Profile</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/classes"
              className="flex items-center space-x-2 hover:text-white hover:bg-gray-700"
            >
              <span>📚</span>
              {isOpen && <span>Classes</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/exams"
              className="flex items-center space-x-2 hover:text-white hover:bg-gray-700"
            >
              <span>📝</span>
              {isOpen && <span>Exams</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/marks"
              className="flex items-center space-x-2 hover:text-white hover:bg-gray-700"
            >
              <span>📈</span>
              {isOpen && <span>Marks</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/events"
              className="flex items-center space-x-2 hover:text-white hover:bg-gray-700"
            >
              <span>🎉</span>
              {isOpen && <span>Events</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/teachers"
              className="flex items-center space-x-2 hover:text-white hover:bg-gray-700"
            >
              <span>👨‍🏫</span>
              {isOpen && <span>Teachers</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/courses"
              className="flex items-center space-x-2 hover:text-white hover:bg-gray-700"
            >
              <span>📘</span>
              {isOpen && <span>Courses</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/attendance"
              className="flex items-center space-x-2 hover:text-white hover:bg-gray-700"
            >
              <span>✅</span>
              {isOpen && <span>Attendance</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default StudentSidebar;
