/** @format */

import React, { useState, useEffect, useCallback } from "react";
import "./styles.css";
import { Image, Form, Input, Row, Col, Modal, message, Button } from "antd";
import UploadIcon from "./../../images/upload_image.svg";
import { InfoCircleOutlined, PlusOutlined } from "@ant-design/icons";
import * as actions from "../../stores/actions/index";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
const propTyes = {
  visible: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  onInputChange: PropTypes.func,
};
const LoginForm = ({ onOk, onCancel }) => {
  const [visible, setVisible] = useState(false);

  const [initailState, setInitaiState] = useState({
    username: "",
    email: "",
    password: "",
    conPassword: "",
  });

  const dispatch = useDispatch();
  const onInputChange = useCallback((event) => {
    switch (event.target.id) {
      case "username":
        return setInitaiState({
          ...initailState,
          username: event.target.value,
        });
      case "email":
        return setInitaiState({
          ...initailState,
          email: event.target.value,
        });
      case "pw":
        return setInitaiState({
          ...initailState,
          password: event.target.value,
        });
      case "cpw":
        return setInitaiState({
          ...initailState,
          conPassword: event.target.value,
        });
      default:
        return;
    }
  }, []);

  const submitHandler = async () => {
    setVisible(false);

    const credintails = initailState;
    console.log(credintails);
    try {
      await dispatch(actions.requestSignUp(credintails));
      await dispatch(actions.requestCreateUser(credintails));
    } catch (e) {
      console.log(e.messages);
    }
  };
  // useEffect(() => {
  //   console.log(initailState.email);
  // }, [onInputChange]);
  const handleOk = (e) => {
    message.success("successfull!");
  };
  const showModal = () => {
    setVisible(true);
  };
  // const handleCancel = (e) => {
  //   setVisible(false);
  // };
  return (
    <div>
      <Button className='AddNew' type='primary' onClick={showModal}>
        <PlusOutlined /> Add New
      </Button>
      <Modal
        title='New User'
        visible={visible}
        onOk={submitHandler}
        onCancel={onCancel}>
        <Form initialValues={{ remember: true }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 8 }}>
            <Col className='gutter-row' span={8}>
              <Col className='gutter-row' span={16}>
                <Form.Item
                  label='Feature Image'
                  tooltip={{
                    title: "User Profile Picture",
                    icon: <InfoCircleOutlined />,
                  }}>
                  <Image
                    className='user'
                    width={100}
                    height={100}
                    src={UploadIcon}
                  />
                </Form.Item>
              </Col>
            </Col>
            <Col className='gutter-row' span={8}>
              <div>
                <Col className='gutter-row' span={24}>
                  <Form.Item
                    label='Username'
                    required
                    tooltip={{
                      title: "Username will required when login",
                      icon: <InfoCircleOutlined />,
                    }}>
                    <Input
                      placeholder='username'
                      id='username'
                      type='text'
                      onChange={(e) => onInputChange(e)}
                    />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' span={24}>
                  <Form.Item
                    label='Email'
                    required
                    tooltip={{
                      title: "Put your correct email for forgot password used!",
                      icon: <InfoCircleOutlined />,
                    }}>
                    <Input
                      placeholder='Email'
                      type='email'
                      id='email'
                      onChange={(e) => onInputChange(e)}
                    />
                  </Form.Item>
                </Col>
              </div>
            </Col>
            <Col className='gutter-row' span={8}>
              <div>
                <Col className='gutter-row' span={24}>
                  <Form.Item
                    label='Password'
                    required
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                    tooltip={{
                      title: "Put strong password",
                      icon: <InfoCircleOutlined />,
                    }}>
                    <Input
                      placeholder='Password'
                      type='password'
                      id='pw'
                      onChange={(e) => onInputChange(e)}
                    />
                  </Form.Item>
                </Col>
                <Col className='gutter-row' span={24}>
                  <Form.Item
                    label='Confirm Password'
                    required
                    tooltip={{
                      title: "Type the the same password from password field!",
                      icon: <InfoCircleOutlined />,
                    }}>
                    <Input
                      placeholder='Confirm Password'
                      type='password'
                      id='cpw'
                      onChange={(e) => onInputChange(e)}
                    />
                  </Form.Item>
                </Col>
              </div>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
  // }
};
LoginForm.propTyes = propTyes;
export default LoginForm;
