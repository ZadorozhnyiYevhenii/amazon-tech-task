import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
import { IDataSoruce } from "@/types/IDataSource";
import { IColumns } from "@/types/IColumns";
import { Link, useParams } from "react-router-dom";

export const ProfilesTable: React.FC = () => {
  const [data, setData] = useState<IDataSoruce[]>([]);
  const { accountId } = useParams<{ accountId: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/profiles?accountId=${accountId}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [accountId]);

  const profile: IColumns[] = [
    { title: "id", dataIndex: "id", key: "id" },
    { title: "accountId", dataIndex: "accountId", key: "accountId" },
    { title: "country", dataIndex: "country", key: "country" },
    { title: "marketplace", dataIndex: "marketplace", key: "marketplace" },
    {
      title: "Campaign info",
      dataIndex: "id",
      key: "id",
      render: (profileId: number) => <Link to={`/campaigns/${profileId}`}>View Campaign</Link>,
    },
  ];

  return (
    <Table
      columns={profile}
      dataSource={data}
      rowKey={(record) => record.id.toString()}
    />
  );
};
