import { DataProps } from "../TableComponent";
import { BanyanValueType } from "../App";
import { css } from "@emotion/css";

const CellTemperatureCInMax = ({
  val,
  row,
  cellCSS,
}: {
  val: string | number;
  row: DataProps<BanyanValueType>;
  cellCSS?: any;
}) => {
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

export default CellTemperatureCInMax;
