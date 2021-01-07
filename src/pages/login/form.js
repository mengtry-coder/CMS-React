/** @format */

import React, { Fragment, useState, useContext } from "react";
import { Redirect } from "react-router";
import LogoImg from "./../../images/Cms-logo-login-2.svg";
import "./styles.css";
import { Button, Form, Input, Checkbox, Image } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Login from "../../components/layouts/loginLayout";
import { useDispatch } from "react-redux";
import * as actions from "../../stores/actions/index";
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
      await dispatch(actions.requestLogin(credincails));
      history.push("/admin");
      setLoading(false);
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };
  const handleRequestForgotPassword = async (email) => {
    try {
      await dispatch(actions.requestForgotPassword(email));
    } catch (e) {
      console.log(e);
    }
  };
  if (currentUser) {
    return <Redirect to='/admin' />;
  }
  return (
    <Fragment>
      <Login>
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}>
          <div mode='inline' className='text-center'>
            <Image width={200} src={LogoImg} />
          </div>
          {/* <h1 className='title-center'>Login Form</h1> */}

          <Form.Item
            hasFeedback
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
            hasFeedback
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
            <a
              className='login-form-forgot'
              onClick={handleRequestForgotPassword}>
                <Link to='/confirm-email'>
                  Forgot Password
                </Link>
            </a>
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
          </Form.Item>
        </Form>
      </Login>
    </Fragment>
  );
};

export default LoginForm;
