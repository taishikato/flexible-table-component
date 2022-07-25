import type { SpringValue } from "@react-spring/web";
import type { ReactDOMAttributes } from "@use-gesture/react/src/types";
import type { DataProps, ColumnProps } from "../types";
import { memo } from "react";
import { animated, to } from "@react-spring/web";
import BodyTh from "./BodyTh";
import { css } from "@emotion/css";
import drag from "../assets/drag.svg";
import Td from "./Td";

type BodyRowProps = {
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

const BodyRow = ({
  bind,
  data,
  columns,
  scale,
  shadow,
  y,
  zIndex,
  isFirstColSticky,
  itemHeight,
}: BodyRowProps) => (
  <animated.tr
    {...bind}
    className={css`
      touch-action: none;
      background-color: #ffffff;
      transform-origin: 50% 50% 0px;
      position: absolute;
      width: 100%;
      height: ${itemHeight}px;
      display: flex;
      cursor: grab;
      box-sizing: border-box;
    `}
    style={{
      zIndex,
      boxShadow: shadow.to(
        (s) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`
      ),
      transform: to(
        [y, scale],
        (y, s) => `translate3d(0,${y}px,0) scale(${s})`
      ),
    }}
  >
    <BodyTh isFirstColSticky={isFirstColSticky}>
      <>
        <img src={drag} />
        {data.name}
      </>
    </BodyTh>
    {columns.map(({ key, dataIndex, render, cellCSS }) => {
      if (dataIndex == null) return;

      if (render) return render(data[dataIndex], data, cellCSS);

      return <Td key={key}>{data[dataIndex]}</Td>;
    })}
  </animated.tr>
);

export default memo(BodyRow);
