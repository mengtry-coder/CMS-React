import React, { useState, useEffect, useCallback, Fragment } from "react";
import { Modal, Button, Form, Input, Switch, Row, Col, message } from "antd";
import featureImage from "../../images/upload_image.svg";
import MediaLibrary from "./mediaLibrary";
import PropType from "prop-types";
import * as actionUser from "../../stores/actions/index";
import { useDispatch } from "react-redux";
import { layout, tailLayout } from "../../constants/index";
const propTypes = {
  onSubmit: PropType.func,
  onCancel: PropType.func,
  user: PropType.oneOfType([PropType.object, PropType.array]),
  onShowModal: PropType.func,
  onUpdate: PropType.bool,
};

const UserForm = ({ onCancel, user, onSubmit, onShowModal, onUpdate }) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const [image, setImage] = useState(null);
  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    imageUrl: "",
    password: "",
    con_password: "",
    userData: [],
  });
  const [form] = Form.useForm();
  const updateValue = () => {
    form.setFieldsValue({
      email: user.email,
      name: user.name,
      address: user.address,
      phone: user.phone,
    });
  };
  const addNewValue = () => {
    form.setFieldsValue({
      email: "",
      name: "",
      address: "",
      phone: "",
    });
  };
  useEffect(() => {
    if (onUpdate === true) {
      updateValue();
      const avatar = !user.avatar ? featureImage : user.avatar;
      setImage(avatar);
    } else {
      setImage(featureImage);
      addNewValue();
    }
  }, [onShowModal]);
  const dispatch = useDispatch();
  // =====Media Modal==
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showMediaModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

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
  /**
   * set default user information
   */
  useEffect(() => {
    if (user) {
      setState({
        ...state,
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        imageUrl: featureImage,
        password: "",
        con_password: "",
        userData: user,
      });
    } else {
      setState({
        userData: [],
      });
    }
  }, [onShowModal]);
  /**
   * select image
   */
  const onSeleceImageUri = (value) => {
    setIsModalVisible(false);
    setImage(value.url);
  };
  const RenderFormPassword = () => (
    <Fragment>
      <Col span={12} order={4}>
        <p>Password:</p>
        <Form.Item
          hasFeedback
          rules={[{ required: true, message: "Password can not be blank!" }]}
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
    </Fragment>
  );

  return (
    <>
      <Form
        form={form}
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={(value) => onSubmit(value, image, status, user.id)}
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
                  rules={[
                    { required: true, message: "Name can not be blank!" },
                  ]}
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
                  rules={[
                    { required: true, message: "Email can not be blank!" },
                  ]}
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
                  rules={[
                    { required: true, message: "Addres can not be blank!" },
                  ]}
                >
                  <Input placeholder="Address" />
                </Form.Item>
              </Col>
              <Col span={12} order={4}>
                <p>Phone:</p>
                <Form.Item
                  name="phone"
                  label={false}
                  tooltip="Optional"
                  rules={[
                    { required: true, message: "Phone can not be blank!" },
                  ]}
                >
                  <Input placeholder="Mobile Phone" />
                </Form.Item>
              </Col>
              {!onUpdate && RenderFormPassword()}
              <Col span={24} order={5}>
                <p>Status:</p>
                <Form.Item name="status" label={false} tooltip="Status">
                  <Switch
                    defaultChecked={status}
                    onChange={() => setStatus(!status)}
                  />
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
            <img width={200} onClick={showMediaModal} src={image}></img>
            <Modal
              title="Select Image"
              visible={isModalVisible}
              onOk={handleMediaOk}
              onCancel={handleMediaCancel}
              footer={false}
            >
              <MediaLibrary onSelectImage={onSeleceImageUri} />
            </Modal>
          </Col>
        </Row>
      </Form>
    </>
  );
};
UserForm.propTypes = propTypes;
export default UserForm;
