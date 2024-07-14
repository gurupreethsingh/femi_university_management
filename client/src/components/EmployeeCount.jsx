import React from "react";

const EmployeeCount = ({ count }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-700">Total Employees</h3>
      <p className="mt-4 text-3xl font-bold text-gray-900">{count}</p>
    </div>
  );
};

export default EmployeeCount;
