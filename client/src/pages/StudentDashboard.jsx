// // import React from "react";
// // import Header from "../components/Header";
// // import StudentSidebar from "../components/StudentSidebar";
// // import Classes from "../components/Classes";
// // import Exams from "../components/Exams";
// // import Events from "../components/Events";
// // import Teachers from "../components/Teachers";
// // import Courses from "../components/Courses";
// // import Attendence from "../components/Attendence";
// // import Marks from "../components/Marks";

// // const StudentDashboard = () => {
// //   return (
// //     <div className="flex flex-col min-h-screen">
// //       <Header />
// //       <div className="flex flex-1 overflow-hidden">
// //         <StudentSidebar />
// //         <div className="flex-1 bg-gray-100 p-5 overflow-y-auto">
// //           <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
// //             <div className="p-6 bg-white rounded-lg shadow-md">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-4">Classes</h2>
// //               <Classes />
// //             </div>
// //             <div className="p-6 bg-white rounded-lg shadow-md">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-4">Exams</h2>
// //               <Exams />
// //             </div>
// //             <div className="p-6 bg-white rounded-lg shadow-md">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-4">Events</h2>
// //               <Events />
// //             </div>
// //           </div>
// //           <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
// //             <div className="p-6 bg-white rounded-lg shadow-md">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-4">Marks</h2>
// //               <Marks />
// //             </div>
// //             <div className="p-6 bg-white rounded-lg shadow-md">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-4">
// //                 Teachers
// //               </h2>
// //               <Teachers />
// //             </div>
// //             <div className="p-6 bg-white rounded-lg shadow-md">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-4">Courses</h2>
// //               <Courses />
// //             </div>
// //             <div className="p-6 bg-white rounded-lg shadow-md">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-4">
// //                 Attendence
// //               </h2>
// //               <Attendence />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StudentDashboard;

// import React from "react";
// import Header from "../components/Header";
// import StudentSidebar from "../components/StudentSidebar";
// import Classes from "../components/Classes";
// import Exams from "../components/Exams";
// import Events from "../components/Events";
// import Teachers from "../components/Teachers";
// import Courses from "../components/Courses";
// import Attendence from "../components/Attendence";
// import Marks from "../components/Marks";

// const StudentDashboard = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <div className="flex flex-1 overflow-hidden">
//         <StudentSidebar />
//         <div className="flex-1 bg-gray-100 p-5 overflow-y-auto hide-scrollbar">
//           <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
//             <div className="p-6 bg-white rounded-lg shadow-md">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Classes</h2>
//               <Classes />
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow-md">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Exams</h2>
//               <Exams />
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow-md">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Events</h2>
//               <Events />
//             </div>
//           </div>
//           <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
//             <div className="p-6 bg-white rounded-lg shadow-md">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Marks</h2>
//               <Marks />
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow-md">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                 Teachers
//               </h2>
//               <Teachers />
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow-md">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Courses</h2>
//               <Courses />
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow-md">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                 Attendence
//               </h2>
//               <Attendence />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;

import React from "react";
import Header from "../components/Header";
import StudentSidebar from "../components/StudentSidebar";
import Classes from "../components/Classes";
import Exams from "../components/Exams";
import Events from "../components/Events";
import Teachers from "../components/Teachers";
import Courses from "../components/Courses";
import Attendence from "../components/Attendence";
import Marks from "../components/Marks";

const StudentDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <StudentSidebar />
        <div className="flex-1 bg-gray-100 p-5 overflow-y-auto hide-scrollbar">
          <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Classes</h2>
              <Classes />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Exams</h2>
              <Exams />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Events</h2>
              <Events />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Marks</h2>
              <Marks />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Teachers
              </h2>
              <Teachers />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Courses</h2>
              <Courses />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Attendence
              </h2>
              <Attendence />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
