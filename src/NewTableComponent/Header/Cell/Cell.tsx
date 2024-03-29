import { memo } from "react";
import { css } from "@emotion/css";

const Cell = () => {
  return (
    <th
      className={css`
        vertical-align: middle;
        padding: 10px;
        border-bottom: 1px solid #0b1424;
        position: sticky;
        top: 0;
        z-index: 10;
        background-color: #ffffff;
      `}
    >
      Header
    </th>
  );
};

export default memo(Cell);
