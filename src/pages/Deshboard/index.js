/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { Layout, Menu, Breadcrumb, Image, Popconfirm, Col, Row } from "antd";
import { Switch } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import * as actionsAuth from "../../stores/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import "../../MainStyle.css";
import Search from "../users/index";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const Dashboard = () => {
  const [collapsed, setCallaped] = useState(false);
  const onCollapse = (value) => {
    setCallaped(value);
  };
  const dispatch = useDispatch();
  const fetchUserFromFirestore = useCallback(async () => {
    try {
      await dispatch(actionsAuth.setUser());
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);
  useEffect(() => {
    fetchUserFromFirestore();
  }, [fetchUserFromFirestore]);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className='logo'>
          <Image
            width={100}
            src='https://www.freelogodesign.org/Content/img/logo-samples/flooop.png'
          />
        </div>
        <Menu theme='dark' defaultSelectedKeys={["1"]} mode='inline'>
          <Menu.Item key='1' icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key='2' icon={<DesktopOutlined />}>
            Setting
          </Menu.Item>
          <SubMenu key='sub1' icon={<UserOutlined />} title='User'>
            <Menu.Item key='3'>Tom</Menu.Item>
            <Menu.Item key='4'>Bill</Menu.Item>
            <Menu.Item key='5'>Alex</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' icon={<TeamOutlined />} title='Team'>
            <Menu.Item key='6'>Team 1</Menu.Item>
            <Menu.Item key='8'>Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key='9' icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }}>
          <Row>
            <Col span={22} />
            <Col span={2}>
              <Popconfirm
                clasasName='btn_logout'
                placement='top'
                // title={text}
                // onConfirm={confirm}
                okText='Yes'
                cancelText='No'>
                <LogoutOutlined /> Logout
              </Popconfirm>
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Index</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 360 }}>
            <Search />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          CMS React ©2020 Created by TNR Developer Team
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
