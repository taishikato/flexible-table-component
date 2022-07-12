import { useState } from "react";
import Table, { OnDragEndProps } from "./components/Table";

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

  const onDragEnd = (result: OnDragEndProps) => {
    const items = [...tableData];
    const [draggedItem] = items.splice(result.source, 1);
    items.splice(result.destination, 0, draggedItem);

    setTableData(items);
  };

  return (
    <Table
      data={tableData}
      isFirstColSticky
      isHeaderSticky
      isTableFixed
      isDraggable
      onDragEnd={() => console.log("hello")}
    />
  );
}

export default App;
