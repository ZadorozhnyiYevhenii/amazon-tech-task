import React from "react";

export interface IColumns {
  title: string;
  dataIndex: string;
  key: React.Key;
  render?: (id: number) => React.ReactNode;
  id?: number;
  email?: string;
};