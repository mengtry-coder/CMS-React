/** @format */

import React, { Component } from "react";
import { Row, Col, Form, Input, Select, Button } from "antd";

const Search = () => {
  const { Option } = Select;
  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label='Image Name'>
            <Input />
          </Form.Item>
        </Col>
        <Col gutter={2}>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'>
            Search
          </Button>
        </Col>
        <Col gutter={2}>
          <Button
            type='secondary'
            htmlType='submit'
            className='login-form-button'>
            Reset
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Search;
