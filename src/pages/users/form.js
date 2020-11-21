/** @format */

import React, { Component } from "react";
import "./styles.css";
import { Image, Form, Input, Row, Col } from "antd";
import UploadIcon from "./../../images/upload_image.svg";
import "antd/dist/antd.css";
import { InfoCircleOutlined } from "@ant-design/icons";

const LoginForm = () => {
  // render() {
  //   const onFinish = (values) => {
  //     console.log('Received values of form: ', values);
  //   };
  const onFinish = (value) => {
    console.log(value);
  };
  const [form] = Form.useForm();

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={12}>
        <div>
          Feature Image
          <Image
            width={200}
            height={200}
            src={UploadIcon}
          />
        </div>
      </Col>
      <Col className="gutter-row" span={12}>
        <div>
          <Col className="gutter-row" span={24}>
            <Form.Item label="Username" required 
              tooltip={{
                title: 'Username will required when login',
                icon: <InfoCircleOutlined />,
              }}>
              <Input placeholder="username" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={24}>
            <Form.Item
              label="Email"
              required
              tooltip={{
                title: 'Put your correct email for forgot password used!',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={24}>
            <Form.Item
              label="Password"
              required
              tooltip={{
                title: 'Put strong password',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input placeholder="Password" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={24}>
          <Form.Item
              label="Confirm Password"
              required
              tooltip={{
                title: 'Type the the same password from password field!',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input placeholder="Confirm Password" />
            </Form.Item>
          </Col>
        </div>
      </Col>
    </Row>
        <Form
          form={form}
          layout="vertical"
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              <div>
                
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div>
                
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div>
                
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div>
                
              </div>
            </Col>
          </Row>
        </Form>
    </div>
  );
  // }
};

export default LoginForm;
