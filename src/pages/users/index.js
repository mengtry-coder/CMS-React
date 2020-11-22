/** @format */

import React, { Component, useEffect, useCallback, useState } from "react";

import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import Form from "./form";
import Search from "./search";
import { Table, Tag, Space, Button, Modal } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { columns } from "../../data/index";
import Loading from "../../components/UI/spiner/index";
import PropTypes from "prop-types";

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
const Index = ({ isLoading }) => {
  const [visible, setVisible] = useState(false);
  const users = useSelector((state) =>
    state.user.users.map((row) => ({
      Name: row.name,
      Age: row.age,
      Address: row.address,
      Action: <DeleteOutlined />,
    })),
  );
  useEffect(() => {
    // console.log("user");
    // console.log(users);
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
  const onSroll = (e) => {
    console.log(e);
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
      <Table
        dataSource={users}
        columns={columns}
        loading={isLoading && <Loading />}
        scroll={(e) => onSroll(e)}
        pagination={{ pageSize: 50 }}
      />
    </div>
  );
};
Index.propTypes = propTypes;
export default Index;
