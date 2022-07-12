import { memo } from "react";
import { css } from "@emotion/css";

export type ThProps = Readonly<{
  children: JSX.Element | string | number;
  isHeaderSticky: boolean;
}>;

const HeaderTh = ({ children, isHeaderSticky }: ThProps) => {
  return (
    <th
      className={css`
        border-bottom: 1px solid #0b1424;
        padding: 12px;
        background-color: #ffffff;
        font-weight: 300;
        ${isHeaderSticky ? "position: sticky; top: 0; z-index: 10;" : ""}
      `}
    >
      {children}
    </th>
  );
};

export default memo(HeaderTh);
