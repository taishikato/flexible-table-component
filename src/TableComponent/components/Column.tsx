import { memo } from "react";
import { css } from "@emotion/css";

export type ColumnProps = Readonly<{
  children: JSX.Element | string | number;
  isHeaderSticky: boolean;
}>;

const Column = ({ children, isHeaderSticky }: ColumnProps) => {
  return (
    <th
      className={css`
        display: flex;
        min-width: 55px;
        align-items: center;
        justify-content: center;
        padding: 12px 0;
        border-bottom: 1px solid #0b1424;
        background-color: #ffffff;
        font-weight: 300;
        flex: 1 1 0%;
        ${isHeaderSticky ? "position: sticky; top: 0; z-index: 10;" : ""}
      `}
    >
      {children}
    </th>
  );
};

export default memo(Column);
