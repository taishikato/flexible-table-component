import type { SpringValue } from "@react-spring/web";
import type { ReactDOMAttributes } from "@use-gesture/react/src/types";
import type { ColumnProps, DataProps } from "../types";
import { memo } from "react";
import { css } from "@emotion/css";
import BodyRow from "./BodyRow";

type BodyProps = {
  springs: {
    zIndex: SpringValue<string>;
    shadow: SpringValue<number>;
    y: SpringValue<number>;
    scale: SpringValue<number>;
  }[];
  bind: (...args: any[]) => ReactDOMAttributes;
  itemHeight: number;
  data: DataProps<any>[];
  columns: ColumnProps[];
  isFirstColSticky: boolean;
};

const Body = ({
  springs,
  bind,
  itemHeight,
  data,
  columns,
  isFirstColSticky,
}: BodyProps) => {
  return (
    <tbody
      className={css`
        position: relative;
        overflow: auto;
      `}
    >
      {springs.map(({ zIndex, shadow, y, scale }, i) => {
        return (
          <BodyRow
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
  );
};

export default memo(Body);
