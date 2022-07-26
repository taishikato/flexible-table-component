import type { DataProps, ColumnProps } from "../types";
import { memo, useRef } from "react";
import { css } from "@emotion/css";
import { useSprings } from "@react-spring/web";
import useBind from "../hooks/useBind";
import { generateSpringsValues } from "../utils/generateSpringsValues";
import HeaderRow from "./HeaderRow";
import BodyRows from "./BodyRows";

export type TableProps = Readonly<{
  data: DataProps<any>[];
  columns: ColumnProps[];
  height?: string;
  rowHeight?: number;
  isHeaderSticky?: boolean;
  isFirstColSticky?: boolean;
  onDragEnd: (args?: unknown) => unknown;
}>;

const Table = ({
  data,
  columns,
  height = "auto",
  rowHeight = 50,
  isHeaderSticky = false,
  isFirstColSticky = false,
  onDragEnd,
}: TableProps) => {
  const order = useRef(data.map((_: any, index: number) => index));

  const [springs, api] = useSprings(
    order.current.length,
    generateSpringsValues({ order: order.current, itemHeight: rowHeight })
  );

  const bind = useBind({
    springsApi: api,
    itemHeight: rowHeight,
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
        width: 100%;
        height: ${height};
        border-collapse: separate;
        border-spacing: 0px 0px;
        position: relative;
        box-sizing: border-box;
      `}
    >
      <HeaderRow
        columns={columns}
        isHeaderSticky={isHeaderSticky}
        isFirstColSticky={isFirstColSticky}
      />
      <BodyRows
        springs={springs}
        itemHeight={rowHeight}
        bind={bind}
        data={data}
        columns={columns}
        isFirstColSticky={isFirstColSticky}
      />
    </table>
  );
};

export default memo(Table);
