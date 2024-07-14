import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import ecoders_logo from "../assets/ecoders_logo_big.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex ${
        isOpen ? "w-64" : "w-20"
      } bg-gray-800 text-white transition-width duration-300`}
    >
      <div className="flex flex-col min-h-screen w-100">
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
        <nav className="flex-1 p-4">
          <ul>
            <li className="mb-4">
              <Link to="/" className="flex items-center space-x-2">
                <span>🏠</span>
                {isOpen && <span>Home</span>}
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/calendar" className="flex items-center space-x-2">
                <span>📅</span>
                {isOpen && <span>Calendar</span>}
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/kanban" className="flex items-center space-x-2">
                <span>📋</span>
                {isOpen && <span>Kanban</span>}
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/datatable" className="flex items-center space-x-2">
                <span>📊</span>
                {isOpen && <span>Data Table</span>}
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/graphics" className="flex items-center space-x-2">
                <span>📈</span>
                {isOpen && <span>Graphics</span>}
              </Link>
            </li>
            {/* Add more dropdowns and links here for future enhancements */}
          </ul>
        </nav>
        {/* <div className="p-4 bg-gray-900">
          <div className="flex items-center space-x-2">
            <img
              className="inline-block h-10 w-10 rounded-full"
              src="https://via.placeholder.com/40"
              alt="User avatar"
            />
            {isOpen && <span>User Name</span>}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
