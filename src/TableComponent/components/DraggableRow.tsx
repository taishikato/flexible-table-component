import { memo } from "react";
import { animated, to } from "@react-spring/web";
import type { SpringValue } from "@react-spring/web";
import type { ReactDOMAttributes } from "@use-gesture/react/src/types";
import BodyTh from "./BodyTh";
import { css } from "@emotion/css";
import drag from "../assets/drag.svg";
import Td from "./Td";
import type { DataProps, ColumnProps } from "./Table";

type DraggableRowProps = {
  data: DataProps;
  columns: ColumnProps[];
  scale: SpringValue<number>;
  shadow: SpringValue<number>;
  y: SpringValue<number>;
  zIndex: SpringValue<string>;
  bind: ReactDOMAttributes;
  isFirstColSticky: boolean;
  itemHeight: number;
};

const DraggableRow = ({
  bind,
  data,
  columns,
  scale,
  shadow,
  y,
  zIndex,
  isFirstColSticky,
  itemHeight,
}: DraggableRowProps) => {
  return (
    <animated.tr
      {...bind}
      style={{
        zIndex,
        boxShadow: shadow.to(
          (s) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`
        ),
        transform: to(
          [y, scale],
          (y, s) => `translate3d(0,${y}px,0) scale(${s})`
        ),
        touchAction: "none",
        backgroundColor: "#ffffff",
        transformOrigin: "50% 50% 0px",
        position: "absolute",
        width: "100%",
        height: `${itemHeight}px`,
        display: "flex",
        cursor: "grab",
      }}
    >
      <BodyTh isFirstColSticky={isFirstColSticky}>
        <div
          className={css`
            display: flex;
            align-items: center;
            column-gap: 0.75rem;
          `}
        >
          <img src={drag} />
          {data.name}
        </div>
      </BodyTh>
      {columns.map(({ key, dataIndex }) => {
        if (dataIndex == null) return;

        return <Td key={key}>{data[dataIndex]}</Td>;
      })}
    </animated.tr>
  );
};

export default memo(DraggableRow);
