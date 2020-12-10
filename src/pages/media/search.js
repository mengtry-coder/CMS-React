/** @format */

import React, { Component } from "react";
import { Row, Col, Form, Input, Select, Button } from "antd";
import PropTypes from "prop-types";
const propTypes = {
  children: PropTypes.node,
};
const Search = ({ children }) => {
  const { Option } = Select;
  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label='Image Name'>
            {/* <Input /> */}
            {children}
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
Search.propTypes = propTypes;
export default Search;
