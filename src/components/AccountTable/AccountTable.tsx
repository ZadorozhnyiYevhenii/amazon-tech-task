import React, { useEffect, useState } from "react"
import { AntTable } from "../BaseTable/BaseTable"
import axios from "axios";

export const AccountTable: React.FC = () => {
  const [data, setData] = useState([]);

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

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Auth Token", dataIndex: "authToken", key: "authToken" },
    { title: "Creation Date", dataIndex: "creationDate", key: "creationDate" },
  ];

  return (
    <div>
      <AntTable columns={columns} datasource={data} />
    </div>
  )
}

