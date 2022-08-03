import { memo } from "react";
import { useDnDSort } from "./hooks/useDnDSort/useDnDSort";
import { css } from "@emotion/css";
import Header from "./Header/Header";
import Body from "./Body/Body";

// 並び替えしたい画像URLの配列
const imageList: string[] = ["Row header 1", "Row header 2", "Row header 3"];

const Table = () => {
  const items = useDnDSort(imageList);

  return (
    <>
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
    </>
  );
};

export default memo(Table);
