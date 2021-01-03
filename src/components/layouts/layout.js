/** @format */

import React, { useState, useEffect } from "react";
import AppBreadcrumbs from "./../AppBreadCrumbs";
import {
  Layout,
  Menu,
  Breadcrumb,
  Image,
  Popconfirm,
  Col,
  Row,
  Popover,
} from "antd";
import LogoImg from "./../../images/Cms-logo-sample-1.svg";
import { Link, useLocation } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileAddOutlined,
  UserOutlined,
  FileImageOutlined,
  LogoutOutlined,
  FormOutlined,
  BankOutlined,
  FundViewOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  DiffOutlined,
} from "@ant-design/icons";
import "../../MainStyle.css";
import * as actionsAuth from "../../stores/actions/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { avatar as userAvatar } from "../../constants/image";
function MainLayout(props) {
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  const [collapsed, setCallaped] = useState(false);
  const [activeKey, setActiveKey] = useState(2);
  const [state, setState] = useState({
    name: null,
    avatar: null,
  });
  const user = useSelector((state) => state.auth.currentUser);
  const location = useLocation().pathname.slice(7);
  console.log(location);
  const onCollapse = (value) => {
    setCallaped(value);
  };
  const dispatch = useDispatch();
  const confirm = async () => {
    await dispatch(actionsAuth.requestLogout());
  };
  useEffect(() => {
    console.log(location.pathname);
    if (user) {
      const { name, avatar } = user[0];
      setState({
        ...state,
        name: name,
        avatar: avatar,
      });
    }
  }, [user]);
  const text = "Are you sure to logout?";
  const content = (
    <div>
      <div className="pop_menu">
        <UserOutlined /> {state.name}
      </div>
      <div className="pop_menu">
        <Link to="/">
          <BankOutlined /> Site
        </Link>
      </div>
      <div className="pop_menu">
        <Link to="/admin//user/index">
          <SettingOutlined /> Setting
        </Link>
      </div>
      <div className="pop_menu">
        <Link>
          <Popconfirm
            clasasName="btn_logout"
            placement="top"
            title={text}
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <LogoutOutlined /> Logout
          </Popconfirm>
        </Link>
      </div>
    </div>
  );
  return (
    <div className={props.class}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Link to="/">
            <div mode="inline" className="logo" className="logo">
              <img width={40} src={LogoImg} />
              <h1>WTCycle</h1>
            </div>
          </Link>

          <Menu
            theme="dark"
            defaultSelectedKeys={[activeKey]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <Menu.Item
              key="1"
              onClick={() => setActiveKey(1)}
              icon={<PieChartOutlined />}
            >
              <Link to="/admin">Dashboard</Link>
            </Menu.Item>
            <Menu.Item
              key="21"
              onClick={() => setActiveKey(21)}
              icon={<FileAddOutlined />}
            >
              <Link to="/admin/media/index">Media</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<DesktopOutlined />} title="MISC">
              <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
                <Link to="/admin/user/index">User</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<DiffOutlined />} title="Setup">
              <Menu.Item key="6" icon={<FundViewOutlined />}>
                <Link to="/admin/country/index">Country</Link>
              </Menu.Item>
              <Menu.Item key="8" icon={<FundViewOutlined />}>
                <Link to="/admin/city/index">City</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<FormOutlined />} title="CMS">
              <Menu.Item key="9" icon={<FileImageOutlined />}>
                <Link to="/admin/custom-image/index">Custom Image</Link>
              </Menu.Item>
              <Menu.Item key="10" icon={<FormOutlined />}>
                <Link to="/admin/custom-text/index">Custom Text</Link>
              </Menu.Item>
              <Menu.Item icon={<SettingOutlined />} key="11">
                <Link to="/admin/config/index">Config</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Row>
              <Col span={22} />
              <Col span={2}>
                <Popover content={content} title="Profile">
                  <Image
                    width={40}
                    src={!state.avatar ? userAvatar : state.avatar}
                  />
                </Popover>
              </Col>
            </Row>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <br></br>
            <AppBreadcrumbs/>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {/* Main */}
              {props.children}
              {/* <User isLoading={isLoading}/> */}
              {/* */}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            CMS React ©2020 Created by TNR Developer Team
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default MainLayout;
