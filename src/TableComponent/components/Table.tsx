import { memo, useRef } from "react";
import { css } from "@emotion/css";
import HeaderTh from "./HeaderTh";
import FirstTh from "./FirstTh";
import { useSprings } from "@react-spring/web";
import useBind from "../hooks/useBind";
import { generateSpringsValues } from "../utils/generateSpringsValues";
import DraggableRow from "./DraggableRow";

export type ColumnProps = Readonly<{
  key: string;
  dataIndex?: string;
  title: string;
  render?: (val: string) => any;
}>;

export type DataProps = {
  name: string;
  [timestamp: string]: string;
};

export type TableProps = Readonly<{
  data: DataProps[];
  columns: ColumnProps[];
  isHeaderSticky?: boolean;
  isFirstColSticky?: boolean;
  isTableFixed?: boolean;
  itemHeight?: number;
  onDragEnd: (args?: unknown) => unknown;
}>;

const Table = ({
  data,
  columns,
  isHeaderSticky = false,
  isFirstColSticky = false,
  isTableFixed = false,
  itemHeight = 46,
  onDragEnd,
}: TableProps) => {
  const order = useRef(data.map((_: any, index: number) => index));

  const [springs, api] = useSprings(
    order.current.length,
    generateSpringsValues({ order: order.current, itemHeight })
  );

  const bind = useBind({
    springsApi: api,
    itemHeight,
    order: order.current,
    dataLength: data.length,
    callBack: (newOrder) => {
      order.current = newOrder;
      onDragEnd();
    },
  });

  return (
    <table
      className={css`
        min-width: 600px;
        border-collapse: separate;
        border-spacing: 0px 0px;
        position: relative;
        height: 500px;
        ${isTableFixed ? "table-layout: fixed;" : ""}
      `}
    >
      <thead>
        <tr>
          {columns.map(({ title, render, key }, index) => {
            if (index === 0)
              return (
                <FirstTh
                  key={key}
                  isHeaderSticky={isHeaderSticky}
                  isFirstColSticky={isFirstColSticky}
                >
                  {render ? render(title) : title}
                </FirstTh>
              );

            return (
              <HeaderTh key={key} isHeaderSticky={isHeaderSticky}>
                {render ? render(title) : title}
              </HeaderTh>
            );
          })}
        </tr>
      </thead>
      <tbody style={{ position: "relative", overflow: "auto" }}>
        {springs.map(({ zIndex, shadow, y, scale }, i) => {
          return (
            <DraggableRow
              key={i}
              bind={bind(i)}
              zIndex={zIndex}
              shadow={shadow}
              itemHeight={itemHeight}
              y={y}
              scale={scale}
              data={data[i]}
              columns={columns}
              isFirstColSticky={isFirstColSticky}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default memo(Table);
