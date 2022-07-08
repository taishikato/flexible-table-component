import { useState, memo, DragEvent } from "react";
import drag from "../drag.svg";
import { css } from "@emotion/css";
import HeaderTh from "./HeaderTh";
import FirstTh from "./FirstTh";
import BodyTh from "./BodyTh";
import Td from "./Td";
import "./Table.css";

export type OnDragEndProps = { destination: number; source: number };

export type TableProps = Readonly<{
  data: any;
  isHeaderSticky?: boolean;
  isFirstColSticky?: boolean;
  isTableFixed?: boolean;
  isDraggable?: boolean;
  onDragEnd: (result: OnDragEndProps) => void;
}>;

const Table = ({
  data,
  isHeaderSticky = false,
  isFirstColSticky = false,
  isTableFixed = false,
  isDraggable = false,
  onDragEnd,
}: TableProps) => {
  const [dragId, setDragId] = useState<number>(0);

  return (
    <table
      className={css`
        min-width: 600px;
        border-collapse: separate;
        border-spacing: 0px 0px;
        ${isTableFixed ? "table-layout: fixed;" : ""}
      `}
    >
      <thead>
        <tr>
          <FirstTh
            isHeaderSticky={isHeaderSticky}
            isFirstColSticky={isFirstColSticky}
          >
            Last Update: June 14th, 10:00 AM
          </FirstTh>
          <HeaderTh isHeaderSticky={isHeaderSticky}>Jun 12th</HeaderTh>
          <HeaderTh isHeaderSticky={isHeaderSticky}>Jun 13th</HeaderTh>
          <HeaderTh isHeaderSticky={isHeaderSticky}>Current</HeaderTh>
          <HeaderTh isHeaderSticky={isHeaderSticky}>Jun 15th</HeaderTh>
          <HeaderTh isHeaderSticky={isHeaderSticky}>Jun 16th</HeaderTh>
        </tr>
      </thead>
      <tbody>
        {data.map((dataValue: any, index: number) => (
          <tr
            id={index.toString()}
            key={dataValue.id}
            draggable={isDraggable}
            className={css`
              background-color: #ffffff;
              ${isDraggable ? "cursor: grab;" : ""}
            `}
            onDragStart={(e: DragEvent<HTMLTableRowElement>) => {
              (e.target as Element).classList.add("dragged-gray-bg");
              setDragId(Number(e.currentTarget.id));
            }}
            onDrop={(e: DragEvent<HTMLTableRowElement>) => {
              onDragEnd({
                destination: Number(e.currentTarget.id),
                source: dragId,
              });

              (e.target as Element).classList.remove("dragged-gray-bg");
            }}
            onDragOver={(ev) => ev.preventDefault()}
            onDragEnter={(e: DragEvent<HTMLTableRowElement>) =>
              (e.target as Element).classList.add("dragged-gray-bg")
            }
            onDragLeave={(e: DragEvent<HTMLTableRowElement>) => {
              (e.target as Element).classList.remove("dragged-gray-bg");
            }}
          >
            <BodyTh isFirstColSticky>
              <div
                className={css`
                  display: flex;
                  align-items: center;
                  column-gap: 0.75rem;
                `}
              >
                {isDraggable && <img src={drag} />}
                {dataValue.name}
              </div>
            </BodyTh>
            {dataValue.values.map((value: any, index: number) => (
              <Td key={index}>{value}</Td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default memo(Table);
