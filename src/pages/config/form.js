import React, {useState} from 'react'
import { Modal, Button, Form, Input, Switch, Row, Col, message } from "antd";
import { layout, tailLayout } from "../../constants/index";
import PropType from "prop-types";

const propTypes = {
    onSubmit: PropType.func,
    onCancel: PropType.func,
    user: PropType.oneOfType([PropType.object, PropType.array]),
    onShowModal: PropType.func,
    onUpdate: PropType.bool,
  };

const ConfigForm = ({ onCancel, config, onSubmit, onShowModal, onUpdate }) => {
    const [form] = Form.useForm();
    const updateValue = () => {
        form.setFieldsValue({
        email: config.name,
        });
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    const [state, setState] = useState({
        name: "",
    });
    return (
        <>
      <Form
        form={form}
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={(value) => onSubmit(value)}
        onFinishFailed={onFinishFailed}
      >
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
                  <Input placeholder="Name" value={state.name} />
                </Form.Item>
              </Col>
               
              {!onUpdate}
              <Col span={24} order={2}>
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
      </Form>
    </>
    )
}

export default ConfigForm
