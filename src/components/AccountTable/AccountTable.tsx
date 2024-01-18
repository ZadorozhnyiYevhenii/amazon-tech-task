import React, { useEffect, useState } from "react"
import { AntTable } from "../BaseTable/BaseTable"
import axios from "axios";
import { IDataSoruce } from "@/types/IDataSource";
import { IColumns } from "@/types/IColumns";
import { Link } from "react-router-dom";

export const AccountTable: React.FC = () => {
  const [data, setData] = useState<IDataSoruce[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/accounts");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const account: IColumns[] = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Auth Token", dataIndex: "authToken", key: "authToken" },
    { title: "Creation Date", dataIndex: "creationDate", key: "creationDate" },
    {
      title: "Profile",
      dataIndex: "id",
      key: "profileLink",
      render: (accountId: number) => <Link to={`/profiles/${accountId}`}>View Profile</Link>,
    },
  ];

  return (
    <AntTable columns={account} datasource={data} />
  )
};
