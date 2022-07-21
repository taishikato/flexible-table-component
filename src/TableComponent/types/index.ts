export type ColumnProps = Readonly<{
  key: string;
  dataIndex?: string;
  title: string;
  render?: (val: string, row: any, cellCSS?: any) => any;
  cellCSS?: Record<string, string | number>;
}>;

export type DataProps<VN extends string = ""> = Readonly<{
  name: string;
  [timestamp: string]: string;
  valueName: VN;
}>;
