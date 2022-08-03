import { memo } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";
import Table from "./NewTableComponent/table";

// 並び替えしたい画像URLの配列
const itemList: string[] = ["Row header 1", "Row header 2", "Row header 3"];

const New = () => {
  return (
    <>
      <Link
        to="/"
        style={{ marginBottom: "30px", display: "block", textAlign: "center" }}
      >
        Go to the Gallery
      </Link>

      <div
        className={css`
          width: 500px;
          height: 650px;
          margin: 0 auto;
          overflow-x: auto;
        `}
      >
        <Table itemList={itemList} />
      </div>
    </>
  );
};
export default memo(New);
