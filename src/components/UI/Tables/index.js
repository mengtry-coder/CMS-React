/** @format */

import React, { useEffect } from "react";
import { Table, Button, Modal, message, Space } from "antd";
import { PlusOutlined, EditFilled, DeleteOutlined } from "@ant-design/icons";
import { columns } from "../../../data/index";
import Loading from "../../../components/UI/spiner/index";

import PropTypes from "prop-types";
const propTypes = {
  onUpdate: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  onDelete: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  dataSource: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  isLoading: PropTypes.bool,
  id: PropTypes.string,
};
const CustomTables = ({ onDelete, onUpdate, isLoading, dataSource, id }) => {
  const actions_button = [
    <EditFilled onClick={onUpdate} />,
    <DeleteOutlined onClick={onDelete} />,
  ];
  const actions = [
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => {
        return <Space size='small'>{actions_button.map((_, i) => _)}</Space>;
      },
    },
  ];
  const newColumns = [...columns, ...actions];
  return (
    <Table
      //   rowSelection={(e) => console.log(e)}
      dataSource={dataSource}
      columns={newColumns}
      loading={isLoading && <Loading />}
      //   //   scroll={}
      pagination={{ pageSize: 50 }}
    />
  );
};
CustomTables.propTypes = propTypes;
export default CustomTables;
