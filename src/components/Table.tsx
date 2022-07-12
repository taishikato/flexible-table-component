import { useState, memo, DragEvent, useRef } from "react";
import drag from "../drag.svg";
import { css } from "@emotion/css";
import HeaderTh from "./HeaderTh";
import FirstTh from "./FirstTh";
import BodyTh from "./BodyTh";
import Td from "./Td";
import "./Table.css";
import { useSprings, animated, to } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { swap } from "../utils/swap";
import { clamp } from "../utils/clamp";

export type OnDragEndProps = { destination: number; source: number };

const itemHeight = 46;

const fn =
  (
    order: any,
    down?: any,
    originalIndex?: number,
    curIndex: number,
    y: number
  ) =>
  (index: number) =>
    down && index === originalIndex
      ? /*
      No need to transition the following properties:
      - z-index, the elevation of the item related to the root of the view; it should pop straight up to 1, from 0.
      - y, the translated distance from the top; it's already being updated dinamically, smoothly, from react-gesture.
      Thus immediate returns `true` for both.
    */
        {
          y: curIndex * itemHeight + y,
          scale: 1.1,
          zIndex: "1",
          shadow: 15,
          immediate: (n: string) => n === "y" || n === "zIndex",
        }
      : {
          y: order.indexOf(index) * itemHeight,
          scale: 1,
          zIndex: "0",
          shadow: 1,
          immediate: false,
        };

export type TableProps = Readonly<{
  data: any;
  isHeaderSticky?: boolean;
  isFirstColSticky?: boolean;
  isTableFixed?: boolean;
  isDraggable?: boolean;
  onDragEnd: (args?: unknown) => unknown;
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
  const order = useRef(data.map((_: any, index: number) => index));

  // @ts-ignore
  const [springs, api] = useSprings(order.current.length, fn(order.current));

  const bind = useDrag(
    ({ args: [originalIndex], down = false, movement: [, y] }) => {
      const curIndex = order.current.indexOf(originalIndex);
      const curRow = clamp(
        Math.round((curIndex * itemHeight + y) / itemHeight),
        0,
        data.length - 1
      );
      const newOrder = swap(order.current, curIndex, curRow);
      /*
      Curry all variables needed for the truthy clause of the ternary expression from fn,
      so that new objects are fed to the springs without triggering a re-render.
    */
      api.start(fn(newOrder, down, originalIndex, curIndex, y));
      // Settles the new order on the end of the drag gesture (when down is false)
      if (!down) {
        order.current = newOrder;
        // update function
        onDragEnd();
      }
    }
  );

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
      <tbody style={{ position: "relative", overflow: "auto" }}>
        {springs.map(({ zIndex, shadow, y, scale }, i) => {
          return (
            <animated.tr
              {...bind(i)}
              key={i}
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
                height: "46px",
                display: "flex",
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
                  {data[i].name}
                </div>
              </BodyTh>
              {data[i].values.map((value: any, index: number) => (
                <Td key={index}>{value}</Td>
              ))}
            </animated.tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default memo(Table);
