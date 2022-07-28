import { css } from "@emotion/css";
import { memo } from "react";

const FirstCell = ({
  children,
}: {
  children: JSX.Element | string | number;
}) => {
  return (
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
      {children}
    </th>
  );
};

export default memo(FirstCell);
