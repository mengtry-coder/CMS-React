import React from "react";
import { Button, Form, Input, message } from "antd";
import LoginLayout from "../../components/layouts/loginLayout";
import * as authActions from "../../stores/actions/index";
import firebase from "../../utils/firebase";
import { useDispatch } from "react-redux";
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

const ForgotPassword = () => {
  const dispatch = useDispatch();
  /**
   *
   * @param {*} values
   * dispatch request sent email to firebase server
   */
  const onFinish = async (values) => {
    const ref = firebase
      .firestore()
      .collection("users")
      .where("email", "==", values.email);
    const onSnapshot = await ref.get();
    if (!onSnapshot.empty) {
      try {
        await dispatch(authActions.requestForgotPassword(values));
        message.success("Check your email to access reset password!");
      } catch (e) {
        message.error(e.message);
      }
    } else {
      message.error("Email not match!");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
            <Form.Item
              hasFeedback
              rules={[{ required: true, message: "Email can not be blank!" }]}
              name="email"
              type="email"
              label={false}
              required
              tooltip="Put Your Real Email"
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item className="text-right" {...tailLayout}>
              <Button
                className="margin-right"
                type="secondary"
                // onClick={onCancel}
              >
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </LoginLayout>
    </div>
  );
};

export default ForgotPassword;
