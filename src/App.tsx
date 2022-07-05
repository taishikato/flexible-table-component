import { useState } from "react";
import drag from "./drag.svg";

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

const isHeaderFixed = true;
const isFirstColFixed = true;

function App() {
  const [tableData, setTableData] = useState(tableDataRaw);

  return (
    <>
      {/* <div className="min-w-[600px]">
        <div
          className={`flex border-b border-[#0B1424] w-full ${
            isHeaderFixed ? "fixed top-0 right-0 left-0 bg-white" : ""
          }`}
          style={{ gridTemplateColumns: "300px repeat(5, minmax(50px, 1fr))" }}
        >
          <div
            className={`p-2 font-semibold w-[300px] ${
              isFirstColFixed ? "fixed left-0 w-full" : ""
            }`}
          >
            Last Update: June 14th, 10:00 AM
          </div>
          <div
            className={`flex-1 p-2 grid place-items-center ${
              isFirstColFixed ? "ml-[300px]" : ""
            }`}
          >
            Jun 12th
          </div>
          <div className="flex-1 p-2 grid place-items-center">Jun 13th</div>
          <div className="flex-1 p-2 grid place-items-center">Current</div>
          <div className="flex-1 p-2 grid place-items-center">Jun 15th</div>
          <div className="flex-1 p-2 grid place-items-center">Jun 16th</div>
        </div>
        {isHeaderFixed && (
          <div
            draggable
            className="grid"
            style={{
              gridTemplateColumns: "300px repeat(5, minmax(50px, 1fr))",
            }}
          >
            <div className="p-2 border-b border-r border-[#E2E2E2] flex items-center gap-x-3">
              <img src={drag} />
              dummy
            </div>
          </div>
        )}
        {tableData.map(({ id, name, values }, index) => (
          <div key={id} draggable className="flex bg-white">
            <div
              className={`p-2 border-b border-r border-[#E2E2E2] flex items-center gap-x-3 w-[300px] ${
                isFirstColFixed ? "fixed left-0" : ""
              }`}
            >
              <img src={drag} />
              {name}
            </div>
            {values.map((value, index) => (
              <div
                key={index}
                className={`p-2 border-b border-r border-[#E2E2E2] flex-1 grid place-items-center ${
                  index === 2 ? "bg-[#e4f6fa]" : ""
                } ${index > 2 ? "bg-[#f3f3f3]" : ""} ${
                  isFirstColFixed && index === 0 ? "ml-[300px]" : ""
                }`}
              >
                {value}
              </div>
            ))}
          </div>
        ))}
      </div> */}

      <table className="table-fixed border-[#696969] min-w-[600px] border-separate border-spacing-0">
        <thead>
          <tr className="">
            <th className="border-b border-[#0B1424] p-2 sticky top-0 bg-white z-20 left-0 text-left font-semibold">
              Last Update: June 14th, 10:00 AM
            </th>
            <th className="border-b border-[#0B1424] p-2 sticky top-0 z-10 bg-white font-light">
              Jun 12th
            </th>
            <th className="border-b border-[#0B1424] p-2 sticky top-0 z-10 bg-white font-light">
              Jun 13th
            </th>
            <th className="border-b border-[#0B1424] p-2 sticky top-0 z-10 bg-white font-light">
              Current
            </th>
            <th className="border-b border-[#0B1424] p-2 sticky top-0 z-10 bg-white font-light">
              Jun 15th
            </th>
            <th className="border-b border-[#0B1424] p-2 sticky top-0 z-10 bg-white font-light">
              Jun 16th
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ id, name, values }, index) => (
            <tr key={id} draggable className="bg-white">
              <th className="border p-2 sticky z-10 bg-white left-0 text-left font-light">
                <div className="flex items-center gap-x-3">
                  <img src={drag} />
                  {name}
                </div>
              </th>
              {values.map((value, index) => (
                <td
                  key={index}
                  className={`border p-2 font-semibold ${
                    index === 2 ? "bg-[#e4f6fa]" : ""
                  } ${index > 2 ? "bg-[#f3f3f3]" : ""}`}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
