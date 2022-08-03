import { memo } from "react";
import type { DnDSortResult } from "../hooks/useDnDSort/types";
import Row from "./Row/Row";

const Body = ({ items }: { items: DnDSortResult<string>[] }) => {
  return (
    <tbody>
      {items.map((item) => (
        <Row item={item} key={item.key} />
      ))}
    </tbody>
  );
};

export default memo(Body);
