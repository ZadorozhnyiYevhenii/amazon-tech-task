import React, { FC } from 'react';
import { Table } from 'antd';
import { IDataSoruce } from '@/types/IDataSource';
import { IColumns } from '@/types/IColumns';

type Props = {
  datasource: IDataSoruce[],
  columns: IColumns[]
}

export const AntTable: FC<Props> = ({ datasource, columns }) => {
  return <Table dataSource={datasource} columns={columns} />;
};

