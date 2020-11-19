/** @format */

import React, { Component, useEffect, useCallback, useState } from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import Form from "./form";
import Search from "./search";
import { Table, Tag, Space, Button, Modal } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { columns } from "../../data/index";

const Index = () => {
  const [visible, setVisible] = useState(false);
  const users = useSelector((state) => state.user.users);
  useEffect(() => {
    console.log(users);
  }, []);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };
  return (
    <div>
      <Button className='AddNew' type='primary' onClick={showModal}>
        <PlusOutlined /> Add New
      </Button>
      <Modal
        title='New User'
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <Form />
      </Modal>
      <Search />
      <br></br>
      <Table dataSource={users} columns={columns} />
    </div>
  );
};
export default Index;
