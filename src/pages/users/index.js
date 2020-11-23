/** @format */

import React, { useEffect, useCallback, useState } from "react";

import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import Form from "./form";
import Search from "./search";
import { Table, Button, Modal, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { columns } from "../../data/index";
import Loading from "../../components/UI/spiner/index";
import PropTypes from "prop-types";
import MainLayout from "../../components/layouts/layout";
import * as actionsAuth from "../../stores/actions/index";
const propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
const Index = () => {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const users = useSelector((state) => state.auth.users);
  const dispatch = useDispatch();
  const fetchUserFromFirestore = useCallback(async () => {
    try {
      await dispatch(actionsAuth.setUser());
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);
  useEffect(() => {
    setIsLoading(true);
    fetchUserFromFirestore().then(() => {
      setIsLoading(false);
    });
  }, [fetchUserFromFirestore]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(false);
    message.success("successfull!");
  };

  const handleCancel = (e) => {
    setVisible(false);
  };
  const onSroll = (e) => {
    console.log(e);
  };
  return (
    <div>
      <MainLayout>
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
      </MainLayout>
    </div>
  );
};
Index.propTypes = propTypes;
export default Index;
