import { IDataSoruce } from "@/types/IDataSource";
import { TableColumnsType } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export namespace Columns {
  export const campaign: TableColumnsType<IDataSoruce> = [
    { title: "Campaign ID", dataIndex: "id", key: "id" },
    { title: "profileId", dataIndex: "profileId", key: "profileId" },
    {
      title: "Clicks",
      dataIndex: "clicks",
      key: "clicks",
      sorter: (a, b) => {
        const idA = a.clicks || 0;
        const idB = b.clicks || 0;
  
        return idA - idB;
      },
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
      sorter: (a, b) => {
        const idA = a.cost || 0;
        const idB = b.cost || 0;
  
        return idA - idB;
      },
    },
    { title: "Date", dataIndex: "date", key: "date", },
  ];
  
  export const profile: TableColumnsType<IDataSoruce> = [
    { title: "id", dataIndex: "id", key: "id" },
    { title: "accountId", dataIndex: "accountId", key: "accountId", },
    { title: "country", dataIndex: "country", key: "country" },
    { title: "marketplace", dataIndex: "marketplace", key: "marketplace" },
    {
      title: "Campaign info",
      dataIndex: "id",
      key: "id",
      render: (profileId: number) => <Link to={`/campaigns/${profileId}`}>View Campaign</Link>,
    },
  ];
}
