import React, {useState} from 'react'
import { Modal, Button, Form, Input, Switch, Row, Col, message } from "antd";
import PropType from "prop-types";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const propTypes = {
    onSubmit: PropType.func,
    onCancel: PropType.func,
    config: PropType.oneOfType([PropType.object, PropType.array]),
    onShowModal: PropType.func,
    onUpdate: PropType.bool,
  };

const ConfigForm = ({ onCancel, config, onSubmit, onShowModal, onUpdate }) => {
    const [form] = Form.useForm();
    const updateValue = () => {
        form.setFieldsValue({
        name: config.name,
        });
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    const [state, setState] = useState({
        name: config.name,
    });
    React.useEffect(() => {
      updateValue()
      // setState({
      //   ...state,
      //   name: config.name
      // })
    }, [config])
    return (
        <>
      <Form
        form={form}
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={(value) => onSubmit(value, config.key)}
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

ConfigForm.propTypes = propTypes;
export default ConfigForm
