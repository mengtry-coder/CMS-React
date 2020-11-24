/** @format */

import React, { Fragment, useState, useContext } from "react";
import { Redirect } from "react-router";
import "./styles.css";
import { Button, Form, Input, Checkbox, Alert } from "antd";
import {
  UserOutlined,
  LockOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import lLogin from "../../components/layouts/loginLayout";
import { useDispatch, useSelector } from "react-redux";
import * as actionRequestLogin from "../../stores/actions/auth";
import { AuthContext } from "../authProvider/index";
const LoginForm = ({ history }) => {
  const [inputState, setInputState] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);

  // const errMessage = useSelector(state => state.auth.errMessage)
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log(values);
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
    setLoading(true);
    try {
      await dispatch(actionRequestLogin.requestLogin(credincails));
      history.push("/");
      setLoading(false);
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };
  if (currentUser) {
    return <Redirect to='/' />;
  }
  return (
    <Fragment>
      <lLogin>
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
            <Input.Password
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
              loading={loading}
              onClick={onSubmitRequestLogin}
              type='primary'
              htmlType='submit'
              className='login-form-button'>
              Log in
            </Button>
            Or <a href='#'>register now!</a>
          </Form.Item>
        </Form>
        </lLogin>
        </Fragment>
  );
};

export default LoginForm;
