import { css } from "@emotion/css";
import { memo } from "react";
import Cell from "./Cell/Cell";

const Header = () => {
  return (
    <thead>
      <tr>
        <th
          className={css`
            min-width: 150px;
            vertical-align: middle;
            padding: 10px 10px 10px 0;
            text-align: left;
            border-bottom: 1px solid #0b1424;
            position: sticky;
            top: 0px;
            left: 0;
            z-index: 20;
            background-color: #ffffff;
          `}
        >
          T Header 1
        </th>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </tr>
    </thead>
  );
};

export default memo(Header);
