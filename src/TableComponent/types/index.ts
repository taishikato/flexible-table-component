export type ColumnProps = Readonly<{
  key: string;
  dataIndex?: string;
  title: string;
  render?: (val: string) => any;
}>;

export type DataProps = Readonly<{
  name: string;
  [timestamp: string]: string;
}>;
