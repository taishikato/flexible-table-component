import { css } from "@emotion/css";
import { CellProps } from "./CellProps";

const CellTemperatureCBelowMax = ({ val, row, cellCSS }: CellProps) => {
  return (
    <td
      className={css`
        border: 1px solid rgb(203 213 225);
        padding: 12px;
        font-weight: 600;
        text-align: center;
        flex: 1 1 0%;
      `}
      style={cellCSS}
    >
      {val}
    </td>
  );
};

export default CellTemperatureCBelowMax;
