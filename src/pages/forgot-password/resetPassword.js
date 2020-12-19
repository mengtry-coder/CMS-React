import React from 'react'
import {Button, Form, Input } from 'antd';
import LoginLayout from '../../components/layouts/loginLayout'
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
      offset: 15,
      span: 24,
  
    },
  };

function ForgotPassword() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div>
            <LoginLayout>
                <div className="forgot-password-form">
                    <Form
                        {...layout}
                        name="normal_login"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        className="login-form"
                    >
                        <p>Password:</p>
                        <Form.Item hasFeedback rules={[{ required: true, message: 'Password can not be blank!' }]} name="password" type="password" label={false} tooltip="Enter Strong Password">
                        <Input.Password placeholder="Password" />
                        </Form.Item>
                        <p>Confirm Password:</p>
                        <Form.Item
                            name="confirm"
                            label={false}
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject('The two passwords that you entered do not match!');
                                },
                            }),
                            ]}
                        >
                            <Input.Password placeholder="Re-enter Password" />
                        </Form.Item>
                        <Form.Item className="text-right" {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </LoginLayout>
        </div>
    )
}

export default ForgotPassword
