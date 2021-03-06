import type { SpringRef } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { generateSpringsValues } from "../utils/generateSpringsValues";
import { swap } from "../utils/swap";
import { clamp } from "../utils/clamp";
import { useState } from "react";

type UseBindProps = {
  springsApi: SpringRef<{
    y: number;
    scale: number;
    zIndex: string;
    shadow: number;
  }>;
  itemHeight: number;
  order: number[];
  dataLength: number;
  callBack?: (newOrder: number[]) => any;
};

const useBind = ({
  springsApi,
  itemHeight,
  order: initialOrder,
  dataLength,
  callBack,
}: UseBindProps) => {
  const [order, setOrder] = useState(initialOrder);

  const bind = useDrag(
    ({ args: [originalIndex], down = false, movement: [, y] }) => {
      const curIndex = order.indexOf(originalIndex);
      const curRow = clamp(
        Math.round((curIndex * itemHeight + y) / itemHeight),
        0,
        dataLength - 1
      );
      const newOrder = swap<number>(order, curIndex, curRow);
      /*
      Curry all variables needed for the truthy clause of the ternary expression from fn,
      so that new objects are fed to the springs without triggering a re-render.
    */
      springsApi.start(
        generateSpringsValues({
          order: newOrder,
          down,
          originalIndex,
          curIndex,
          y,
          itemHeight,
        })
      );
      // Settles the new order on the end of the drag gesture (when down is false)
      if (!down && callBack) {
        callBack(newOrder);
        setOrder(newOrder);
      }
    }
  );

  return bind;
};

export default useBind;
