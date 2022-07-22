import { memo } from "react";
import { css } from "@emotion/css";
import { CellProps } from "./CellProps";

const CellTemperatureCAboveMax = ({ val, row, cellCSS }: CellProps) => {
  return (
    <td
      className={css`
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgb(203 213 225);
        font-weight: 600;
        flex: 1 1 0%;
        box-sizing: border-box;
      `}
      style={cellCSS}
    >
      {val}
    </td>
  );
};

export default memo(CellTemperatureCAboveMax);
