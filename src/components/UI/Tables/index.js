/** @format */

import React from "react";
import { Table, Divider } from "antd";
import { EditFilled, DeleteOutlined } from "@ant-design/icons";
import { columns, config } from "../../../data/index";

import PropTypes from "prop-types";
const propTypes = {
  onUpdate: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  onDelete: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  dataSource: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.bool,
};
const CustomTables = ({ onDelete, onUpdate, loading, dataSource }) => {
  const actions = [
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <>
          <EditFilled onClick={() => onUpdate(record)} />
          <Divider type='vertical' />
          <DeleteOutlined onClick={() => onDelete(record)} />
        </>
      ),
    },
  ];
  const newColumns = [...columns, ...actions];
  return (
    <Table
      dataSource={dataSource}
      columns={newColumns}
      loading={loading}
      pagination={{ pageSize: 50 }}
    />
  );
};
CustomTables.propTypes = propTypes;
export default CustomTables;
