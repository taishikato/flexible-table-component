import { useState } from "react";
import { Table } from "./TableComponent";
import type { ColumnProps } from "./TableComponent";

const dates = ["Jun 12th", "Jun 13th", "Jun 14th", "Jun 15th", "Jun 16th"];

const tableDataRaw = [
  {
    name: "Temperature - Above Canopy",
    "Jun 12th": "85.5°F",
    "Jun 13th": "85.5°F",
    "Jun 14th": "89.5°F",
    "Jun 15th": "83.5°F",
    "Jun 16th": "82.5°F",
  },
  {
    name: "Temperature - In Canopy",
    "Jun 12th": "86.3°F",
    "Jun 13th": "85.5°F",
    "Jun 14th": "86.2°F",
    "Jun 15th": "87.5°F",
    "Jun 16th": "83.2°F",
  },
  {
    name: "Temperature - Below Canopy",
    "Jun 12th": "88.3°F",
    "Jun 13th": "89.5°F",
    "Jun 14th": "87.2°F",
    "Jun 15th": "87.5°F",
    "Jun 16th": "84.2°F",
  },
  // {
  //   id: 4,
  //   name: "Temperature - Below Canopy",
  //   values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  // },
  // {
  //   id: 5,
  //   name: "Temperature - Below Canopy",
  //   values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  // },
  // {
  //   id: 6,
  //   name: "Temperature - Below Canopy",
  //   values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  // },
  // {
  //   id: 7,
  //   name: "Temperature - Below Canopy",
  //   values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  // },
  // {
  //   id: 8,
  //   name: "Temperature - Below Canopy",
  //   values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  // },
  // {
  //   id: 9,
  //   name: "Temperature - Below Canopy",
  //   values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  // },
  // {
  //   id: 10,
  //   name: "Temperature - Below Canopy",
  //   values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  // },
  // {
  //   id: 11,
  //   name: "Temperature - Below Canopy",
  //   values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  // },
  // {
  //   id: 12,
  //   name: "Temperature - Below Canopy",
  //   values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  // },
  // {
  //   id: 13,
  //   name: "Temperature - Below Canopy",
  //   values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  // },
  // {
  //   id: 14,
  //   name: "Temperature - Below Canopy",
  //   values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  // },
  // {
  //   id: 15,
  //   name: "Temperature - Below Canopy",
  //   values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  // },
  // {
  //   id: 16,
  //   name: "Temperature - Below Canopy",
  //   values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  // },
  // {
  //   id: 17,
  //   name: "Temperature - Below Canopy",
  //   values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  // },
  // {
  //   id: 18,
  //   name: "Temperature - Below Canopy",
  //   values: ["88.3°F", "89.5°F", "87.2°F", "87.5°F", "84.2°F"],
  // },
];

const columns: ColumnProps[] = [
  {
    key: "lastUpdate",
    title: "Last Update: June 14th, 10:00 AM",
  },
  ...dates.map((d) => {
    return {
      key: d,
      dataIndex: d,
      title: d,
    };
  }),
];

function App() {
  const [tableData, setTableData] = useState(tableDataRaw);

  return (
    <Table
      data={tableData}
      columns={columns}
      isFirstColSticky
      isHeaderSticky
      isTableFixed
      isDraggable
      onDragEnd={() => console.log("hello")}
    />
  );
}

export default App;
