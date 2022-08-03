import { memo } from "react";
import type { DnDSortResult } from "../hooks/useDnDSort/types";
import Row from "./Row/Row";

type Props<T> = {
  items: DnDSortResult<T>[];
};

const Body = <T extends string | number | JSX.Element>({ items }: Props<T>) => {
  return (
    <tbody>
      {items.map((item) => (
        <Row item={item} key={item.key} />
      ))}
    </tbody>
  );
};

export default memo(Body);
