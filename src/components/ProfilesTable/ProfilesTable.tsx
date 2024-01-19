import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";
import { IDataSoruce } from "@/types/IDataSource";
import { useParams } from "react-router-dom";
import { WrapperWithButton } from "../WrapperWithButton/WrapperWithButton";
import { Columns } from "../../utils/columns";

export const ProfilesTable: React.FC = () => {
  const [data, setData] = useState<IDataSoruce[]>([]);
  const { accountId } = useParams<{ accountId: string }>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/profiles?accountId=${accountId}`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [accountId]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <WrapperWithButton>
          <Table
            columns={Columns.profile}
            dataSource={data}
            rowKey={(record) => record.id.toString()}
          />
        </WrapperWithButton>
      )}
    </>
  );
};
