import drag from "../drag.svg";
import { css } from "@emotion/css";

type TableProps = Readonly<{
  data: any;
  isHeaderSticky?: boolean;
  isFirstColSticky?: boolean;
  isTableFixed?: boolean;
}>;

const Table = ({
  data,
  isHeaderSticky = false,
  isFirstColSticky = false,
  isTableFixed = false,
}: TableProps) => {
  return (
    <table
      className={css`
        min-width: 600px;
        border: 1px solid #696969;
        border-collapse: separate;
        border-spacing: 0px 0px;
        ${isTableFixed ? "table-layout: fixed;" : ""}
      `}
    >
      <thead>
        <tr>
          <th
            className={css`
              background-color: #ffffff;
              text-align: left;
              font-weight: 600;
              border-bottom: 1px solid #0b1424;
              padding: 12px;
              ${isHeaderSticky && isFirstColSticky
                ? "position: sticky; top: 0px; left: 0; z-index: 20;"
                : ""}
              ${isHeaderSticky && !isFirstColSticky
                ? "position: sticky; top: 0px; z-index: 20;"
                : ""}
							${!isHeaderSticky && isFirstColSticky
                ? "position: sticky; left: 0; z-index: 20;"
                : ""}
            `}
          >
            Last Update: June 14th, 10:00 AM
          </th>
          <th
            className={css`
              border-bottom: 1px solid #0b1424;
              padding: 12px;
              background-color: #ffffff;
              font-weight: 300;
              ${isHeaderSticky ? "position: sticky; top: 0; z-index: 10" : ""}
            `}
          >
            Jun 12th
          </th>
          <th
            className={css`
              border-bottom: 1px solid #0b1424;
              padding: 12px;
              background-color: #ffffff;
              font-weight: 300;
              ${isHeaderSticky ? "position: sticky; top: 0; z-index: 10" : ""}
            `}
          >
            Jun 13th
          </th>

          <th
            className={css`
              border-bottom: 1px solid #0b1424;
              padding: 12px;
              background-color: #ffffff;
              font-weight: 300;
              ${isHeaderSticky ? "position: sticky; top: 0; z-index: 10" : ""}
            `}
          >
            Current
          </th>
          <th
            className={css`
              border-bottom: 1px solid #0b1424;
              padding: 12px;
              background-color: #ffffff;
              font-weight: 300;
              ${isHeaderSticky ? "position: sticky; top: 0; z-index: 10" : ""}
            `}
          >
            Jun 15th
          </th>
          <th
            className={css`
              border-bottom: 1px solid #0b1424;
              padding: 12px;
              background-color: #ffffff;
              font-weight: 300;
              ${isHeaderSticky ? "position: sticky; top: 0; z-index: 10" : ""}
            `}
          >
            Jun 16th
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((dataValue: any, index: number) => (
          <tr
            key={dataValue.id}
            draggable
            className={css`
              background-color: #ffffff;
            `}
          >
            <th
              // className={`border p-2 bg-white text-left font-light ${
              //   isFirstColSticky ? "sticky z-10 left-0" : ""
              // }`}
              className={css`
                border: 1px solid rgb(148 163 184);
                padding: 12px;
                background-color: #ffffff;
                text-align: left;
                font-weight: 300;
                ${isFirstColSticky
                  ? "position: sticky; z-index: 10; left: 0"
                  : ""}
              `}
            >
              <div className="flex items-center gap-x-3">
                <img src={drag} />
                {dataValue.name}
              </div>
            </th>
            {dataValue.values.map((value: any, index: number) => (
              <td
                key={index}
                className={css`
                  border: 1px solid rgb(148 163 184);
                  padding: 12px;
                  font-weight: 600;
                  ${index === 2 ? "background-color: #e4f6fa" : ""} ${index > 2
                    ? "background-color: #f3f3f3"
                    : ""}
                `}
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
