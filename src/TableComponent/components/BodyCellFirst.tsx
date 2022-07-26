import { memo } from "react";
import { css } from "@emotion/css";

type BodyCellFirstProps = Readonly<{
  children: JSX.Element | string | number;
  isFirstColSticky: boolean;
  cellCSS?: Record<string, string | number>;
  width: string | number;
}>;

const BodyCellFirst = ({
  children,
  isFirstColSticky,
  cellCSS,
  width,
}: BodyCellFirstProps) => {
  return (
    <th
      className={css`
        min-width: ${width || undefined};
        vertical-align: middle;
        flex-shrink: 0;
        padding-left: 10px;
        border: 1px solid rgb(203 213 225);
        background-color: #ffffff;
        font-weight: 300;
        box-sizing: border-box;
        ${isFirstColSticky ? "position: sticky; z-index: 10; left: 0" : ""};
      `}
      style={cellCSS}
    >
      {children}
    </th>
  );
};

export default memo(BodyCellFirst);
