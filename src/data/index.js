/** @format */
import React from "react";
import { DeleteOutlined, EditFilled } from "@ant-design/icons";
import { Tag } from "antd";
const arr = [
  {
    id: 1,
    icon: <EditFilled />,
  },
  {
    id: 2,
    icon: <DeleteOutlined />,
  },
];
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
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
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
    render: () => <EditFilled onClick={() => alert("Clicked")} />,
  },
];
