import { DataProps } from "../TableComponent";
import { BanyanValueType } from "../App";

export type CellProps = {
  val: string | number;
  row: DataProps<BanyanValueType>;
  cellCSS?: Record<string, string | number>;
};
