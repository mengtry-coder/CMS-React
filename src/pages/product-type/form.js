import React, {useState, useCallback} from 'react';
import { Modal, Button, Form, Input, Switch, Row, Col, message } from "antd";
import { layout, tailLayout } from "../../constants/index";
import MediaLibrary from "./mediaLibrary";
import featureImage from "../../images/upload_image.svg";

const ProductTypeForm = () => {
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
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [image, setImage] = useState(null);
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    const handleMediaOk = () => {
        setIsModalVisible(false);
      };
      const onSeleceImageUri = (value) => {
        setIsModalVisible(false);
        setImage(value.url);
      };
      const handleMediaCancel = () => {
        setIsModalVisible(false);
      };
    const showMediaModal = useCallback(() => {
    setIsModalVisible(true);
    }, []);
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
                  <Input placeholder="Input Description" />
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

export default ProductTypeForm
