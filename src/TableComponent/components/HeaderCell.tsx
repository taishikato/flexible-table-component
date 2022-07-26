import { memo } from "react";
import { css } from "@emotion/css";

export type ColumnProps = Readonly<{
  children: JSX.Element | string | number;
  isHeaderSticky: boolean;
  width?: string | number;
}>;

const HeaderCell = ({ children, isHeaderSticky, width }: ColumnProps) => {
  return (
    <th
      className={css`
        min-width: ${width || undefined};
        text-align: center;
        padding: 12px 0;
        border-bottom: 1px solid #0b1424;
        background-color: #ffffff;
        font-weight: 300;
        ${isHeaderSticky ? "position: sticky; top: 0; z-index: 10;" : ""}
      `}
    >
      {children}
    </th>
  );
};

export default memo(HeaderCell);
