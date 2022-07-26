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
}: BodyCellFirstProps) => (
  <th
    className={css`
      min-width: ${width || undefined};
      display: flex;
      align-items: center;
      padding-left: 10px;
      border-bottom: 1px solid rgb(203 213 225);
      border-right: 1px solid rgb(203 213 225);
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

export default memo(BodyCellFirst);
