import React from 'react'
import {Button, Form, Input, message } from 'antd';
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
        message.success('Check your email to access reset password!');
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
                        <p>Email:</p>
                        <Form.Item hasFeedback rules={[{ required: true, message: 'Email can not be blank!' }]} name="password" type="password" label={false} tooltip="Enter Strong Password">
                        <Input placeholder="Email" />
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
