import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import { IDataSoruce } from "@/types/IDataSource";
import { IColumns } from "@/types/IColumns";
import { WrapperWithButton } from "../WrapperWithButton/WrapperWithButton";

export const CampaignsTable: React.FC = () => {
  const [data, setData] = useState<IDataSoruce[]>([]);
  const [loading, setLoading] = useState(true);

  const { profileId } = useParams<{ profileId: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/campaigns?profileId=${profileId}`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [profileId]);

  const campaignColumns: IColumns[] = [
    { title: "Campaign ID", dataIndex: "id", key: "id" },
    { title: "profileId", dataIndex: "profileId", key: "profileId" },
    { title: "Clicks", dataIndex: "clicks", key: "clicks" },
    { title: "Cost", dataIndex: "cost", key: "cost" },
    { title: "Date", dataIndex: "date", key: "date" },
  ];

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <WrapperWithButton>
          <Table
            columns={campaignColumns}
            dataSource={data}
            rowKey={(record) => record.id.toString()}
          />
        </WrapperWithButton>
      )}
    </>
  );
};
