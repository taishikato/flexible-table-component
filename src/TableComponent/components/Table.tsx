import type { DataProps, ColumnProps } from "../types";
import { memo, useRef } from "react";
import { css } from "@emotion/css";
import { useSprings } from "@react-spring/web";
import useBind from "../hooks/useBind";
import { generateSpringsValues } from "../utils/generateSpringsValues";
import HeaderRow from "./HeaderRow";
import BodyCell from "./BodyCell";

export type TableProps = Readonly<{
  data: DataProps<any>[];
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
        width: 100%;
        height: 500px;
        border-collapse: separate;
        border-spacing: 0px 0px;
        position: relative;
        box-sizing: border-box;
        ${isTableFixed ? "table-layout: fixed;" : ""}
      `}
    >
      <HeaderRow
        columns={columns}
        isHeaderSticky={isHeaderSticky}
        isFirstColSticky={isFirstColSticky}
      />
      <BodyCell
        springs={springs}
        itemHeight={itemHeight}
        bind={bind}
        data={data}
        columns={columns}
        isFirstColSticky={isFirstColSticky}
      />
    </table>
  );
};

export default memo(Table);
