/** @format */

import React, { Component } from "react";
import { Row, Col, Form, Input, Select, Button } from "antd";
import "antd/dist/antd.css";
import PropType from "prop-types";
const propTypes = {
  onChangeText: PropType.func,
  onClear: PropType.func,
};
const status = [
  {
    id: 1,
    title: "Active",
    value: true,
  },
  {
    id: 2,
    title: "Inactive",
    value: false,
  },
];
const Search = () => {
  return (
    <>
      <br></br>
      <br></br>
      <Form>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Name">
              <Input  />
            </Form.Item>
          </Col>
          <Col gutter={2}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default Search;
