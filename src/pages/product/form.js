import React, {useCallback, useState} from 'react'
import { Modal, Button, Form, Input, Switch, Row, Col, message, Select, TextArea } from "antd";
import featureImage from "../../images/upload_image.svg";
import MediaLibrary from "./mediaLibrary";

const ProductForm = () => {
  const { Option } = Select;
  const { TextArea } = Input;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleMediaOk = () => {
    setIsModalVisible(false);
  };
  const handleMediaCancel = () => {
    setIsModalVisible(false);
  };
  const showMediaModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);
  const onSeleceImageUri = (value) => {
    setIsModalVisible(false);
    setImage(value.url);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 24,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 6,
      span: 24,
    },
  };
  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        // onFinish={(value) => onSubmit(value)}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={120}>
          <Col span={17} order={2}>
            <Row>
              <Col span={24} order={1}>
                <Row >
                <Col span={12} order={1}>
                  <p>Product Type:</p>
                  <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
                    <Option value="wocomerce">Woo Comerce</Option>
                    <Option value="shopping">Shopping</Option>
                </Select>
                </Col>
                <Col span={12} order={2}>
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
                    <Input placeholder="Product Name" />
                  </Form.Item>
                </Col>
                </Row>
              </Col>
              <Col span={24} order={2}>
                <p>Description:</p>
                <Form.Item
                  name="description"
                  type="description"
                  label={false}
                  rules={[
                    { required: true, message: "Email can not be blank!" },
                  ]}
                >
                  <TextArea  placeholder="Input Description" />
                </Form.Item>
              </Col>
              
              <Col span={24} order={6}>
                <Form.Item className="text-right" {...tailLayout}>
                  <Button
                    className="margin-right"
                    type="secondary"
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
              footer={false}
            >
              <MediaLibrary onSelectImage={onSeleceImageUri} />
            </Modal>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default ProductForm
