import React, { useEffect, useState } from "react"
import { Table, TableColumnsType } from 'antd'
import axios from "axios";
import { IColumns } from "@/types/IColumns";
import { Link } from "react-router-dom";

export const AccountTable: React.FC = () => {
  const [data, setData] = useState<IColumns[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/accounts");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const emails = data.map(user => user.email);

  const filteredEmails = emails.filter(email => email !== undefined);

  const emailFilters = filteredEmails.map(email => ({ text: email || 'Undefined', value: email || 'Undefined' }));

  const account: TableColumnsType<IColumns> = [
    { title: "ID", dataIndex: "id", key: "id" },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      filters: emailFilters,
      filterSearch: true,
      onFilter: (value: React.Key | boolean, record: IColumns): boolean => {
        if (typeof value === 'boolean') {
          return value;
        } else {
          return record.email ? record.email.startsWith(value.toString()) : false;
        }
      },
    },
    { title: "Auth Token", dataIndex: "authToken", key: "authToken" },
    { title: "Creation Date", dataIndex: "creationDate", key: "creationDate" },
    {
      title: "Profile",
      dataIndex: "id",
      key: "profileLink",
      sorter: (a, b) => {
        const idA = a.id || 0;
        const idB = b.id || 0;

        return idA - idB;
      },
      render: (accountId: number) => <Link to={`/profiles/${accountId}`}>View Profile</Link>,
    },
  ];

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Table
          columns={account}
          dataSource={data}
        />
      )}
    </>
  )
};
