import { useState } from "react";
import { Table } from "./TableComponent";
import type { ColumnProps, DataProps } from "./TableComponent";
import moment from "moment";
import "moment-timezone";
import CellTemperatureCAboveMax from "./MyComponents/CellTemperatureCAboveMax";
import CellTemperatureCInMax from "./MyComponents/CellTemperatureCInMax";
import CellTemperatureCBelowMax from "./MyComponents/CellTemperatureCBelowMax";
import { CellProps } from "./MyComponents/CellProps";

export type BanyanValueType =
  | "temperature_c_above_max"
  | "temperature_c_in_max"
  | "temperature_c_below_max";

const valueToRowRendererMapper: Record<BanyanValueType, React.FC<CellProps>> = {
  temperature_c_above_max: CellTemperatureCAboveMax,
  temperature_c_in_max: CellTemperatureCInMax,
  temperature_c_below_max: CellTemperatureCBelowMax,
};

const dates = [
  "2022-07-20T08:00:00.000Z",
  "2022-07-21T08:00:00.000Z",
  "2022-07-22T08:00:00.000Z",
  "2022-07-23T08:00:00.000Z",
  "2022-07-24T08:00:00.000Z",
];

const tableDataRaw: DataProps<BanyanValueType>[] = [
  {
    name: "Temperature - Above Canopy Max",
    valueName: "temperature_c_above_max",
    "2022-07-20T08:00:00.000Z": "85.5°F",
    "2022-07-21T08:00:00.000Z": "85.5°F",
    "2022-07-22T08:00:00.000Z": "89.5°F",
    "2022-07-23T08:00:00.000Z": "83.5°F",
    "2022-07-24T08:00:00.000Z": "82.5°F",
  },
  {
    name: "Temperature - In Canopy Max",
    valueName: "temperature_c_in_max",
    "2022-07-20T08:00:00.000Z": "86.3°F",
    "2022-07-21T08:00:00.000Z": "85.5°F",
    "2022-07-22T08:00:00.000Z": "86.2°F",
    "2022-07-23T08:00:00.000Z": "87.5°F",
    "2022-07-24T08:00:00.000Z": "83.2°F",
  },
  {
    name: "Temperature - Below Canopy Max",
    valueName: "temperature_c_below_max",
    "2022-07-20T08:00:00.000Z": "88.3°F",
    "2022-07-21T08:00:00.000Z": "89.5°F",
    "2022-07-22T08:00:00.000Z": "87.2°F",
    "2022-07-23T08:00:00.000Z": "87.5°F",
    "2022-07-24T08:00:00.000Z": "84.2°F",
  },
];

const timezone = "America/Los_Angeles";

const columns: ColumnProps[] = [
  {
    key: "lastUpdate",
    title: "Last Update: June 14th, 10:00 AM",
  },
  ...dates.map((d) => {
    const momentOfDate = moment.tz(d, timezone);
    const todayMoment = moment.tz(timezone);

    let cellCSS;

    if (todayMoment.isSame(momentOfDate, "day"))
      cellCSS = { background: "blue", color: "#ffffff" };

    const render = (
      val: string,
      row: DataProps<BanyanValueType>,
      cellCSS: any
    ) => {
      const ComponentToUse = valueToRowRendererMapper[row.valueName];

      if (!ComponentToUse) return null;

      return <ComponentToUse val={val} row={row} key={d} cellCSS={cellCSS} />;
    };

    return {
      key: d,
      dataIndex: d,
      title: momentOfDate.format("MMM D"),
      cellCSS,
      render,
    };
  }),
];

function App() {
  const [tableData, setTableData] = useState(tableDataRaw);

  return (
    <div style={{ minWidth: "400px", maxWidth: "600px", margin: "0 auto" }}>
      <Table
        data={tableData}
        columns={columns}
        isFirstColSticky
        isHeaderSticky
        isTableFixed
        onDragEnd={() => console.log("hello")}
      />
    </div>
  );
}

export default App;
