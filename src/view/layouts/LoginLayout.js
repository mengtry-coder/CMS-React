import React, { Component } from 'react';
import LoginForm from '../../login/LoginForm';
import 'antd/dist/antd.css';

export class LoginLayout extends Component {
  render() {
    return (
      <div>
        <LoginForm />
      </div>
    )
  }
}

export default LoginLayout
