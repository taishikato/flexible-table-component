import { memo } from "react";
import { css } from "@emotion/css";

type FirstColumnProps = Readonly<{
  children: JSX.Element | string | number;
  isHeaderSticky: boolean;
  isFirstColSticky: boolean;
}>;

const FirstColumn = ({
  children,
  isHeaderSticky,
  isFirstColSticky,
}: FirstColumnProps) => {
  return (
    <th
      className={css`
        border-bottom: 1px solid #0b1424;
        text-align: left;
        font-weight: 600;
        background-color: #ffffff;
        padding: 12px;
        ${isHeaderSticky && isFirstColSticky
          ? "position: sticky; top: 0px; left: 0; z-index: 20;"
          : ""}
        ${isHeaderSticky && !isFirstColSticky
          ? "position: sticky; top: 0px; z-index: 20;"
          : ""}
		    ${!isHeaderSticky && isFirstColSticky
          ? "position: sticky; left: 0; z-index: 20;"
          : ""}
      `}
    >
      {children}
    </th>
  );
};

export default memo(FirstColumn);
