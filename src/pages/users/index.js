/** @format */

import React, { useEffect, useCallback, useState, useRef } from "react";

import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import CreateUserForm from "./form";
import Search from "./search";
import { Button, Modal, message, Row, Col } from "antd";
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
  const [userData, setUserData] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);
  const [dataSource, setDataSource] = useState([]);
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
  /**
   *
   * @param {*} user
   * handle delete user from firebase firestore
   */
  const _onDelete = async (user) => {
    setIsLoading(true);
    try {
      if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
        await dispatch(actionsAuth.requestDeleteUser(user.id));
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (e) {
      message.error(e.message);
      setIsLoading(false);
    }
  };
  /**
   * handle update user info
   */
  const _onUpdate = (record) => {
    setVisible(true);
    setUserData(record);
    setIsUpdate(true);
  };

  const showModal = () => {
    setVisible(true);
    setIsUpdate(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
  };
  /**
   * handle create user to firebase firestore
   */
  const onSubmit = async (user, image, status, id) => {
    setIsLoading(true);
    setVisible(false);
    try {
      if (isUpdate === false) {
        await dispatch(actionsAuth.requestSignUp(user, image, status));
      } else {
        await dispatch(actionsAuth.requestUpdate(user, id, image, status));
      }
      setIsLoading(false);
      message.success("Successful");
    } catch (e) {
      message.error(e.message);
      setIsLoading(false);
    }
  };
  /**
   *
   * @param {get paramer} value
   * handle search user by name
   */
  const onChangeText = (value) => {
    const new_arr_data = users.filter(
      (i) =>
        i.name.toLowerCase().includes(value.toLowerCase()) ||
        i.phone.toLowerCase().includes(value.toLowerCase())
    );
    if (value === "") {
      setDataSource([]);
    } else {
      setDataSource(new_arr_data);
    }
  };
  const onClearTextSearch = (e) => {
    console.log(e);
  };
  return (
    <div>
      <MainLayout>
        <Row>
          <Col span={12} order={1}>
            <Search onChangeText={onChangeText} onClear={onClearTextSearch} />
          </Col>
          <Col span={12} order={1}>
              <div className="text-right">
                <Button type="primary" onClick={showModal}>
                  + Add New
                </Button>
                <Modal
                  visible={visible}
                  title="Create User"
                  footer={false}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <CreateUserForm
                    onCancel={handleCancel}
                    user={userData}
                    onSubmit={onSubmit}
                    onShowModal={showModal}
                    onUpdate={isUpdate}
                  />
                </Modal>
              </div>
          </Col>
      </Row>
        <CustomTable
          dataSource={!dataSource.length ? users : dataSource}
          loading={isLoading && <Loading />}
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
