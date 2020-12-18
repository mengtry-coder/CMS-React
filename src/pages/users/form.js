import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Form,
  Input,
  Switch,
  Row,
  Col,
  Image,
  message,
} from "antd";
import featureImage from "../../images/upload_image.svg";
import MediaLibrary from "./mediaLibrary";
import PropType from "prop-types";
import * as actionUser from "../../stores/actions/index";
import { useDispatch } from "react-redux";
const propTypes = {
  onSubmit: PropType.func,
  onCancel: PropType.func,
  user: PropType.oneOfType([PropType.object, PropType.array]),
};
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 22,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 15,
    span: 8,
  },
};

const UserForm = ({ onCancel, user, onSubmit }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const dispatch = useDispatch();
  // =====Media Modal==
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showMediaModal = () => {
    setIsModalVisible(true);
  };

  const handleMediaOk = () => {
    setIsModalVisible(false);
  };

  const handleMediaCancel = () => {
    setIsModalVisible(false);
  };

  // ====End====
  const showModal = () => {
    setVisible(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    setState({
      ...state,
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone,
    });
  }, [user]);
  const submitRequestUpdate = async (users) => {
    try {
      await dispatch(actionUser.requestUpdate(users, user.id));
    } catch (e) {
      message.error(e.message);
    }
  };

  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={(value) => onSubmit(value)}
        onFinishFailed={onFinishFailed}
      >
        <Row>
          <Col span={17} order={2}>
            <Row>
              <Col span={12} order={1}>
                <p>Name:</p>
                <Form.Item
                  name="name"
                  label={false}
                  required
                  tooltip="This is a required field"
                >
                  <Input placeholder="Full Name" value={state.name} />
                </Form.Item>
              </Col>
              <Col span={12} order={2}>
                <p>Email:</p>
                <Form.Item
                  name="email"
                  type="email"
                  label={false}
                  required
                  tooltip="Put Your Real Email"
                >
                  <Input placeholder="Email" value={state.email} />
                </Form.Item>
              </Col>
              <Col span={12} order={3}>
                <p>Address:</p>
                <Form.Item
                  name="address"
                  label={false}
                  tooltip="Your Current Address"
                >
                  <Input placeholder="Address" value={state.address} />
                </Form.Item>
              </Col>
              <Col span={12} order={4}>
                <p>Phone:</p>
                <Form.Item name="phone" label={false} tooltip="Optional">
                  <Input
                    placeholder={state.phone ? state.phone : "Mobile Phone"}
                    value={state.phone}
                  />
                </Form.Item>
              </Col>
              <Col span={12} order={4}>
                <p>Password:</p>
                <Form.Item
                  hasFeedback
                  rules={[
                    { required: true, message: "Password can not be blank!" },
                  ]}
                  name="password"
                  type="password"
                  label={false}
                  tooltip="Enter Strong Password"
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>
              </Col>
              <Col span={12} order={4}>
                <p>Confirm Password:</p>
                <Form.Item
                  name="confirm"
                  label={false}
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          "The two passwords that you entered do not match!"
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="Re-enter Password" />
                </Form.Item>
              </Col>
              <Col span={24} order={5}>
                <p>Status:</p>
                <Form.Item name="status" label={false} tooltip="Status">
                  <Switch defaultChecked onChange={() => setStatus(!status)} />
                </Form.Item>
              </Col>
              <Col span={24} order={6}>
                <Form.Item className="text-right" {...tailLayout}>
                  <Button
                    className="margin-right"
                    type="secondary"
                    onClick={onCancel}
                  >
                    Cancel
                  </Button>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={7} order={1}>
            <p>Feature Image</p>
            {/* <Image
                width={200}
                src={featureImage}
                onClick={showModal}
             /> */}
            <img width={200} onClick={showMediaModal} src={featureImage}></img>
            <Modal
              title="Select Image"
              visible={isModalVisible}
              onOk={handleMediaOk}
              onCancel={handleMediaCancel}
            >
              <MediaLibrary />
            </Modal>
          </Col>
        </Row>
      </Form>
    </>
  );
};
UserForm.propTypes = propTypes;
export default UserForm;
