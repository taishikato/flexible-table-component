import { memo } from "react";
import { css } from "@emotion/css";

type FirstColumnProps = Readonly<{
  children: JSX.Element | string | number;
  isHeaderSticky: boolean;
  isFirstColSticky: boolean;
  width: number | string;
  headerRowCellCSS: Record<string, string | number>;
}>;

const FirstColumn = ({
  children,
  isHeaderSticky,
  isFirstColSticky,
  width,
  headerRowCellCSS,
}: FirstColumnProps) => {
  return (
    <th
      className={css`
        width: ${width || undefined};
        min-width: ${width || undefined};
        text-align: left;
        position: relative;
        vertical-align: middle;
        border-bottom: 1px solid #0b1424;
        font-weight: 600;
        background-color: #ffffff;
        box-sizing: border-box;
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
      style={headerRowCellCSS}
    >
      {children}
    </th>
  );
};

export default memo(FirstColumn);
