import { css } from "@emotion/css";
import { memo } from "react";

const Cell = ({ children }: { children: JSX.Element | string | number }) => {
  return (
    <td
      className={css`
        vertical-align: middle;
        padding: 10px;
        text-align: center;
        font-weight: 600;
        user-select: none;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(203 213 225);
        &:not(:last-child) {
          border-right: 1px solid rgb(203 213 225);
        }
      `}
    >
      {children}
    </td>
  );
};

export default memo(Cell);
