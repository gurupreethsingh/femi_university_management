import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const StudentExamSidebar = () => {
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
      className={` card flex flex-col bg-light text-dark shadow rounded transition-all duration-300 ${
        isOpen ? "w-64" : "w-15"
      }`}
    >
      <div className="flex items-center justify-end bg-dark text-white p-2">
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
              to="/student-exam-dashboard"
              className="flex items-center space-x-2 hover:text-white hover:bg-gray-700"
            >
              <span>🏠</span>
              {isOpen && <span>Dashboard</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/all-upcoming-exams"
              className="flex items-center space-x-2  hover:text-white hover:bg-gray-700"
            >
              <span>📅</span>
              {isOpen && <span>Upcoming Exams</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/all-ongoing-exams"
              className="flex items-center space-x-2  hover:text-white hover:bg-gray-700"
            >
              <span>⌛</span>
              {isOpen && <span>Ongoing Exams</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/all-previous-exams"
              className="flex items-center space-x-2  hover:text-white hover:bg-gray-700"
            >
              <span>📜</span>
              {isOpen && <span>Previous Exams</span>}
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/exam-marks"
              className="flex items-center space-x-2  hover:text-white hover:bg-gray-700"
            >
              <span>📈</span>
              {isOpen && <span>Exam Marks</span>}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 bg-gray-900">
        <div className="flex items-center space-x-2">
          <img
            className="inline-block h-8 w-8 rounded-full"
            src="https://via.placeholder.com/40"
            alt="User avatar"
          />
          {isOpen && <span className="text-white">User Name</span>}
        </div>
      </div>
    </div>
  );
};

export default StudentExamSidebar;
