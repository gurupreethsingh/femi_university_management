// // import React from "react";
// // import Header from "../components/Header";
// // import EmployeeCount from "../components/EmployeeCount";
// // import Calendar from "../components/Calender";
// // import KanbanBoard from "../components/KanbanBoard";
// // import DataTable from "../components/DataTable";
// // import Graphics from "../components/Graphics";
// // import Sidebar from "../components/Sidebar";

// // const Homepage = () => {
// //   return (
// //     <div className="flex flex-col min-h-screen">
// //       <Header />
// //       <div className="flex flex-1 overflow-hidden sticky">
// //         <Sidebar />
// //         <div className="flex-1 bg-gray-100 p-5 overflow-y-auto">
// //           <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
// //             <div className="p-6 bg-white rounded-lg shadow-md">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-4">
// //                 Employee Count
// //               </h2>
// //               <EmployeeCount count={50} />
// //             </div>
// //             <div className="p-6 bg-white rounded-lg shadow-md">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-4">
// //                 Calendar
// //               </h2>
// //               <Calendar />
// //             </div>
// //             <div className="p-6 bg-white rounded-lg shadow-md">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-4">
// //                 Graphics
// //               </h2>
// //               <Graphics />
// //             </div>
// //           </div>
// //           <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
// //             <div className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white rounded-lg shadow-md">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-4">
// //                 Kanban Board
// //               </h2>
// //               <KanbanBoard />
// //             </div>
// //             <div className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white rounded-lg shadow-md">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-4">
// //                 Employee Data
// //               </h2>
// //               <DataTable />
// //             </div>
// //             <div className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white rounded-lg shadow-md">
// //               <h2 className="text-2xl font-bold text-gray-900 mb-4">
// //                 Employee Data
// //               </h2>
// //               <DataTable />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Homepage;
// import React from "react";
// import Header from "../components/Header";
// import EmployeeCount from "../components/EmployeeCount";
// import Calendar from "../components/Calender";
// import KanbanBoard from "../components/KanbanBoard";
// import DataTable from "../components/DataTable";
// import Graphics from "../components/Graphics";
// import Sidebar from "../components/Sidebar";

// const Homepage = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <div className="flex flex-1">
//         <div className="sticky top-0 h-screen overflow-y-auto">
//           <Sidebar />
//         </div>
//         <div className="flex-1 bg-gray-100 p-5 overflow-y-auto">
//           <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
//             <div className="p-6 bg-white rounded-lg shadow-md">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                 Employee Count
//               </h2>
//               <EmployeeCount count={50} />
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow-md">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                 Calendar
//               </h2>
//               <Calendar />
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow-md">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                 Graphics
//               </h2>
//               <Graphics />
//             </div>
//           </div>
//           <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
//             <div className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white rounded-lg shadow-md">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                 Kanban Board
//               </h2>
//               <KanbanBoard />
//             </div>
//             <div className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white rounded-lg shadow-md">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                 Employee Data
//               </h2>
//               <DataTable />
//             </div>
//             <div className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white rounded-lg shadow-md">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                 Employee Data
//               </h2>
//               <DataTable />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Homepage;
import React from "react";
import Header from "../components/Header";
import EmployeeCount from "../components/EmployeeCount";
import Calendar from "../components/Calender";
import KanbanBoard from "../components/KanbanBoard";
import DataTable from "../components/DataTable";
import Graphics from "../components/Graphics";
import Sidebar from "../components/Sidebar";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <div className="flex flex-1 min-h-screen">
        <div className="sticky top-16 h-screen min-h-screen">
          <Sidebar />
        </div>
        <div className="flex-1 bg-gray-100 p-5 overflow-y-auto">
          <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Employee Count
              </h2>
              <EmployeeCount count={50} />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Calendar
              </h2>
              <Calendar />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Graphics
              </h2>
              <Graphics />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Kanban Board
              </h2>
              <KanbanBoard />
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Employee Data
              </h2>
              <DataTable />
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Employee Data
              </h2>
              <DataTable />
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Employee Data
              </h2>
              <DataTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
