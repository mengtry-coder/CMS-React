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
      <Form>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label={false}>
              <Input placeholder="Search"  />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default Search;
