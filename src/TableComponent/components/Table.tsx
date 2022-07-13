import { memo, useRef } from "react";
import { css } from "@emotion/css";
import { useSprings } from "@react-spring/web";
import useBind from "../hooks/useBind";
import { generateSpringsValues } from "../utils/generateSpringsValues";
import Header from "./Header";
import Body from "./Body";

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
      <Header
        columns={columns}
        isHeaderSticky={isHeaderSticky}
        isFirstColSticky={isFirstColSticky}
      />
      <Body
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
