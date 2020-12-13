import React, {useState} from 'react'
import { Modal, Button, Form, Input, Switch, Row, Col, Image } from 'antd';
import featureImage from '../../images/upload_image.svg';
import MediaLibrary from './mediaLibrary'
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
const UserForm = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const handleOk = () => {
    this.setState({ setLoading: true });
    setTimeout(() => {
      this.setState({ setLoading: false, setVisible: false });
    }, 3000);
  };

  const handleClose = () => {
    setVisible(false);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
        
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Row>
            <Col span={17} order={2}>
              <Row>
                <Col span={12} order={1}>
                    <p>Name:</p>
                    <Form.Item name="name" label={false} required tooltip="This is a required field">
                    <Input placeholder="Full Name" />
                  </Form.Item>

                </Col>
                <Col span={12} order={2}>
                  <p>Email:</p>
                  <Form.Item name="email" type="email" label={false} required tooltip="Put Your Real Email">
                    <Input placeholder="Email" />
                  </Form.Item>
                </Col>
                <Col span={12} order={3}>
                  <p>Address:</p>
                  <Form.Item name="address" label={false} tooltip="Your Current Address">
                    <Input placeholder="Address" />
                  </Form.Item>
                </Col>
                <Col span={12} order={4}>
                  <p>Phone:</p>
                  <Form.Item name="phone" label={false} tooltip="Optional">
                    <Input placeholder="Mobile Phone" />
                  </Form.Item>
                </Col>
                <Col span={24} order={5}>
                  <p>Status:</p>
                  <Form.Item name="status" label={false} tooltip="Status">
                    <Switch defaultChecked />
                  </Form.Item>
                </Col>
                <Col span={24} order={6}>
                  <Form.Item className="text-right" {...tailLayout}>
                     <Button className="margin-right" type="secondary" onClick={handleClose}>
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
  )
}

export default UserForm
