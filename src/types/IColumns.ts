export interface IColumns {
  title: string;
  dataIndex: string;
  key: string;
  render?: (id: number) => JSX.Element;
};