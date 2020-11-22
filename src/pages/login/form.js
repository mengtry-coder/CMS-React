/** @format */

import React, { Fragment, useState } from "react";
import "./styles.css";
import { Button, Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import * as actionRequestLogin from "../../stores/actions/auth";
const LoginForm = () => {
  const [inputState, setInputState] = useState({ email: "", password: "" });
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  // const errMessage = useSelector(state => state.auth.errMessage)
  const dispatch = useDispatch();
  const onFinish = (values) => {
    setInputEmail(values);

    // if (values === "username") {
    //   console.log("this is user name");
    // }
    // setInputState({ password: e.target.value, ...inputState });
  };
  const textEmailChange = (e) => {
    // console.log(e.target.name);
    setInputState({ email: e.target.value, ...inputState });
    console.log(inputState.email);
  };
  const textPasswordChange = (e) => {
    setInputState({ password: e.target.value, ...inputState });
  };
  const onSubmitRequestLogin = async () => {
    const credincails = {
      email: inputEmail,
      password: inputPassword,
    };
    await dispatch(actionRequestLogin.requestLogin(credincails));
  };
  return (
    <Fragment>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}>
        <h1 className='title-center'>Login Form</h1>
        <Form.Item
          name='username'
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}>
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Username'
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}>
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
            onChange={(e) => setInputPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className='login-form-forgot'>Forgot password</a>
        </Form.Item>

        <Form.Item className='title-center'>
          <Button
            onClick={onSubmitRequestLogin}
            type='primary'
            htmlType='submit'
            className='login-form-button'>
            Log in
          </Button>
          Or <a href='#'>register now!</a>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default LoginForm;
