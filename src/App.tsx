import { useState } from "react";
import Table from "./components/Table";

const tableDataRaw = [
  {
    id: 1,
    name: "Temperature - Above Canopy",
    values: ["85.5°F", "85.5°F", "85.5°F", "85.5°F", "85.5°F"],
  },
  {
    id: 2,
    name: "Temperature - In Canopy",
    values: ["86.3°F", "85.5°F", "86.2°F", "87.5°F", "83.2°F"],
  },
  {
    id: 3,
    name: "Temperature - Below Canopy",
    values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  },
  {
    id: 4,
    name: "Temperature - Below Canopy",
    values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  },
  {
    id: 5,
    name: "Temperature - Below Canopy",
    values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  },
  {
    id: 6,
    name: "Temperature - Below Canopy",
    values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  },
  {
    id: 7,
    name: "Temperature - Below Canopy",
    values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  },
  {
    id: 8,
    name: "Temperature - Below Canopy",
    values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  },
  {
    id: 9,
    name: "Temperature - Below Canopy",
    values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  },
  {
    id: 10,
    name: "Temperature - Below Canopy",
    values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  },
  {
    id: 11,
    name: "Temperature - Below Canopy",
    values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  },
  {
    id: 12,
    name: "Temperature - Below Canopy",
    values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  },
  {
    id: 13,
    name: "Temperature - Below Canopy",
    values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  },
  {
    id: 14,
    name: "Temperature - Below Canopy",
    values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  },
  {
    id: 15,
    name: "Temperature - Below Canopy",
    values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  },
  {
    id: 16,
    name: "Temperature - Below Canopy",
    values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  },
  {
    id: 17,
    name: "Temperature - Below Canopy",
    values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  },
  {
    id: 18,
    name: "Temperature - Below Canopy",
    values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  },
];

function App() {
  const [tableData, setTableData] = useState(tableDataRaw);

  return (
    <Table
      data={tableData}
      isFirstColSticky
      isHeaderSticky
      isTableFixed
      isDraggable
    />
    // <table className="table-fixed border-[#696969] min-w-[600px] border-separate border-spacing-0">
    //   <thead>
    //     <tr>
    //       <th
    //         className={`border-b border-[#0B1424] p-2 bg-white text-left font-semibold ${
    //           isHeaderSticky && isFirstColSticky
    //             ? "sticky top-0 z-20 left-0"
    //             : ""
    //         } ${
    //           isHeaderSticky && !isFirstColSticky ? "sticky top-0 z-20" : ""
    //         } ${
    //           !isHeaderSticky && isFirstColSticky ? "sticky left-0 z-20" : ""
    //         }`}
    //       >
    //         Last Update: June 14th, 10:00 AM
    //       </th>
    //       <th
    //         className={`border-b border-[#0B1424] p-2 bg-white font-light ${
    //           isHeaderSticky ? "sticky top-0 z-10" : ""
    //         }`}
    //       >
    //         Jun 12th
    //       </th>
    //       <th
    //         className={`border-b border-[#0B1424] p-2 bg-white font-light ${
    //           isHeaderSticky ? "sticky top-0 z-10" : ""
    //         }`}
    //       >
    //         Jun 13th
    //       </th>
    //       <th
    //         className={`border-b border-[#0B1424] p-2 bg-white font-light ${
    //           isHeaderSticky ? "sticky top-0 z-10" : ""
    //         }`}
    //       >
    //         Current
    //       </th>
    //       <th
    //         className={`border-b border-[#0B1424] p-2 bg-white font-light ${
    //           isHeaderSticky ? "sticky top-0 z-10" : ""
    //         }`}
    //       >
    //         Jun 15th
    //       </th>
    //       <th
    //         className={`border-b border-[#0B1424] p-2 bg-white font-light ${
    //           isHeaderSticky ? "sticky top-0 z-10" : ""
    //         }`}
    //       >
    //         Jun 16th
    //       </th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {tableData.map(({ id, name, values }, index) => (
    //       <tr key={id} draggable className="bg-white">
    //         <th
    //           className={`border p-2 bg-white text-left font-light ${
    //             isFirstColSticky ? "sticky z-10 left-0" : ""
    //           }`}
    //         >
    //           <div className="flex items-center gap-x-3">
    //             <img src={drag} />
    //             {name}
    //           </div>
    //         </th>
    //         {values.map((value, index) => (
    //           <td
    //             key={index}
    //             className={`border p-2 font-semibold ${
    //               index === 2 ? "bg-[#e4f6fa]" : ""
    //             } ${index > 2 ? "bg-[#f3f3f3]" : ""}`}
    //           >
    //             {value}
    //           </td>
    //         ))}
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
}

export default App;
