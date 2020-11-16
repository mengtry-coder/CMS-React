import React, { Component } from 'react'
import 'antd/dist/antd.css';
import '../../MainStyle.css';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Image, message, Popconfirm, Col, Row } from 'antd';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
// import LoginForm from './LoginLayout';
// import NotFound from '../../../public/error';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import Index from '../user/index';
import TestData from '../user/test_data';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const confirm = () => {
  console.log("You click logout");
  <Redirect to="/exception/403" />
}
export class MainLayout extends Component {
  state = {
      collapsed: false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
    render() {
        const { collapsed } = this.state;
        const text = 'Are you sure to logout?';

        return (
          <Router>
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                  <div className="logo">
                  <Image
                    width={100}
                    src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png"
                    />
                  </div>
                  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                      Dashboard
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Setting
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                      <Menu.Item key="3">Tom</Menu.Item>
                      <Menu.Item key="4">Bill</Menu.Item>
                      <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                      <Menu.Item key="6">Team 1</Menu.Item>
                      <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                      Files
                    </Menu.Item>
                  </Menu>
                </Sider>
                <Layout className="site-layout">
                  <Header className="site-layout-background" style={{ padding: 0 }}>
                          <Row>
                            <Col span={22} />
                              <Col span={2}>
                                <Popconfirm clasasName="btn_logout" placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
                                  <LogoutOutlined /> Logout
                                </Popconfirm>
                              </Col>
                          </Row>
                  </Header>
                  <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item>User</Breadcrumb.Item>
                      <Breadcrumb.Item>Index</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    {/* Main Content */}
                    <Switch>
                        {/* <Route path="/" component={NotFound} /> */}
                        <Route path="/user/index" component={Index} />
                        <Route path="/user/test" component={TestData} />
                    </Switch>
                    {/* End Main Content */}
                    </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>CMS React ©2020 Created by TNR Developer Team</Footer>
                </Layout>
              </Layout>
            </div>
            </Router>
        )
    }
}

export default MainLayout
