import { memo } from "react";
import { useDnDSort } from "./hooks/useDnDSort/useDnDSort";
import { css } from "@emotion/css";
import Header from "./Header/Header";
import Body from "./Body/Body";

type Props<T> = {
  itemList: T[];
};

const Table = <T extends string | number | JSX.Element>({
  itemList,
}: Props<T>) => {
  const items = useDnDSort<T>(itemList);

  return (
    <table
      className={css`
        width: 100%;
        border-collapse: separate;
        border-spacing: 0px 0px;
        position: relative;
        box-sizing: border-box;
      `}
    >
      <Header />
      <Body items={items} />
    </table>
  );
};

export default memo(Table);
