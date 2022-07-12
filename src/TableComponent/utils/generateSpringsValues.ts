export const generateSpringsValues =
  ({
    order,
    down,
    originalIndex,
    curIndex,
    y,
    itemHeight,
  }: {
    order: number[];
    down?: any;
    originalIndex?: number;
    curIndex?: number;
    y?: number;
    itemHeight: number;
  }) =>
  (index: number) =>
    down && curIndex !== undefined && y !== undefined && index === originalIndex
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
