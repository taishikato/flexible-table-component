import { memo } from "react";
import { css } from "@emotion/css";
import { CellProps } from "./CellProps";

const CellTemperatureCInMax = ({ val, row, cellCSS, width }: CellProps) => {
  return (
    <td
      className={css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 1 0%;
        border: 1px solid rgb(203 213 225);
        font-weight: 600;
        box-sizing: border-box;
        text-align: center;
        min-width: ${width || undefined};
      `}
      style={cellCSS}
    >
      {val}
    </td>
  );
};

export default memo(CellTemperatureCInMax);
