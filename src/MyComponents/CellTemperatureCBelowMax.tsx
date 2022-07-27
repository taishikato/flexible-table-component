import { memo } from "react";
import { css } from "@emotion/css";
import { CellProps } from "./CellProps";

const CellTemperatureCBelowMax = ({ val, row, cellCSS, width }: CellProps) => {
  return (
    <td
      className={css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 1 0%;
        font-weight: 600;
        user-select: none;
        box-sizing: border-box;
        min-width: ${width || undefined};
        border-bottom: 1px solid rgb(203 213 225);
        &:not(:last-child) {
          border-right: 1px solid rgb(203 213 225);
        }
      `}
      style={cellCSS}
    >
      {val}
    </td>
  );
};

export default memo(CellTemperatureCBelowMax);
