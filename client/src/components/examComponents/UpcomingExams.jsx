import React from "react";
import { Link } from "react-router-dom";

const exams = [
  { id: 1, name: "Math Exam", date: "2023-12-01", status: "upcoming" },
  { id: 2, name: "Physics Exam", date: "2023-12-05", status: "upcoming" },
  // Add more exams as needed
];

const UpcomingExams = () => {
  return (
    <div className="bg-white rounded-lg">
      {exams.map((exam) => (
        <Link
          to={`/exam/${exam.id}`}
          key={exam.id}
          className="block p-4 mb-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200"
        >
          <h3 className="text-lg font-semibold text-gray-600">{exam.name}</h3>
          <p className="text-gray-600">{exam.date}</p>
        </Link>
      ))}
    </div>
  );
};

export default UpcomingExams;
