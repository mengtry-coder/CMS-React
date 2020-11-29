/** @format */

import React, { useEffect, useCallback, useState, useRef } from "react";

import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import Form from "./form";
import Search from "./search";
import { Table, Button, Modal, message, Space } from "antd";
import { PlusOutlined, EditFilled, DeleteOutlined } from "@ant-design/icons";
import { columns } from "../../data/index";
import Loading from "../../components/UI/spiner/index";
import PropTypes from "prop-types";
import MainLayout from "../../components/layouts/layout";
import CustomTable from "../../components/UI/Tables/index";
import * as actionsAuth from "../../stores/actions/index";
const propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
const Index = () => {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const users = useSelector((state) => state.auth.users);
  const alertRef = useRef();
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
    // setVisible(false);
    message.success("successfull!");
  };

  const handleCancel = (e) => {
    setVisible(false);
  };
  const _onDelete = (id) => {
    alert("Are you sure you want to delete this user?");
  };
  const _onUpdate = (id) => {};
  return (
    <div>
      <MainLayout>
        <Form />
        <Search />
        <br></br>
        <CustomTable
          dataSource={users}
          loading={isLoading}
          onDelete={_onDelete}
          onUpdate={_onUpdate}
          // scroll={(e) => onSroll(e)}
          // id={id}
          pagination={{ pageSize: 50 }}
        />
      </MainLayout>
    </div>
  );
};
Index.propTypes = propTypes;
export default Index;
