/** @format */

import React, { Component } from "react";
import { Row, Col, Form, Input, Select, Button } from "antd";
import "./styles.css";
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
const Search = ({ onChangeText, onClear }) => {
  const [form] = Form.useForm();
  const { Option } = Select;
  return (
    <>
      <Form form={form}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Name">
              <Input placeholder="Search" onChange={(e) => onChangeText(e.target.value)} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Status">
              <Select defaultValue="Active">
                {status.map((d) => {
                  return (
                    <Option key={d.id.toString()} value={d.value}>
                      {d.title}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
Search.PropType = propTypes;
export default Search;
