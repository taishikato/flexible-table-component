export type ColumnProps = Readonly<{
  key: string;
  dataIndex?: string;
  title: string;
  render?: (...params: any[]) => any;
  cellCSS?: Record<string, string | number>;
  width: string | number;
}>;

export type DataProps<VN extends string = ""> = Readonly<{
  name: string;
  valueName: VN;
  values: { [timestamp: string]: string };
}>;
