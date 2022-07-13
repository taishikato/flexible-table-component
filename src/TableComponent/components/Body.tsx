import type { SpringValue } from "@react-spring/web";
import type { ReactDOMAttributes } from "@use-gesture/react/src/types";
import type { ColumnProps, DataProps } from "./Table";
import { memo } from "react";
import DraggableRow from "./DraggableRow";

type BodyProps = {
  springs: {
    zIndex: SpringValue<string>;
    shadow: SpringValue<number>;
    y: SpringValue<number>;
    scale: SpringValue<number>;
  }[];
  bind: (...args: any[]) => ReactDOMAttributes;
  itemHeight: number;
  data: DataProps[];
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
  );
};

export default memo(Body);
