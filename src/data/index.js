/** @format */

import { DeleteOutlined } from "@ant-design/icons";
export const users = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
    action: <DeleteOutlined />,
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
    action: <DeleteOutlined />,
  },
];

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];