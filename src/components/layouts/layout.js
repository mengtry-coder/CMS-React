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
  Card,
  Avatar,
  Space
} from "antd";
import LogoImg from "./../../images/Cms-logo-sample-2.svg";
import { Link, useLocation } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileAddOutlined,
  HomeOutlined,
  FileImageOutlined,
  LogoutOutlined,
  FormOutlined,
  BankOutlined,
  EditOutlined,
  EllipsisOutlined,
  FundViewOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  PhoneOutlined,
  BellOutlined,
  DiffOutlined,
} from "@ant-design/icons";
import "../../MainStyle.scss";
import * as actionsAuth from "../../stores/actions/auth";
import { useDispatch, useSelector } from "react-redux";
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
  // useEffect(() => {
  //   console.log(location.pathname);
  //   if (user) {
  //     const { name, avatar } = user[0];
  //     setState({
  //       ...state,
  //       name: name,
  //       avatar: avatar,
  //     });
  //   }
  // }, [user]);
  const text = "Are you sure to logout?";
  const { Meta } = Card;
  const content = (
    <div className="text-center">
      <Card
        style={{ width: 300 }}
        cover={
        <img
            alt="imgCover"
            src="https://cdn.psdrepo.com/images/2x/free-macbook-pro-mockup-psd-y2.jpg"
        />
        }
        actions={[
          <Link to="/admin/config/index"><SettingOutlined /></Link>,
          <Link to="/"><HomeOutlined /></Link>,
          <Link>
            <Popconfirm
              clasasName="btn_logout"
              placement="top"
              title={text}
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <LogoutOutlined />
            </Popconfirm>
          </Link>
        ]}
    >
        <Meta
            avatar={<Avatar src="https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg" />}
            title="Mengtry"
            description="Chom Ka Morn, Sothearous, Phnom Penh"
        />
    </Card>
    </div>
  );
  return (
    <div className={props.class}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Link to="/">
            <div mode="inline" className="logo text-center">
              <img className="m-2" width={100} src={LogoImg} />
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
              <Menu.Item key="112" icon={<UsergroupAddOutlined />}>
                <Link to="/admin/product/index">Product</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
                <Link to="/admin/user/index">User</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<DiffOutlined />} title="Setup">
              <Menu.Item key="111" icon={<FileImageOutlined />}>
                <Link to="/admin/product-type/index">Product Type</Link>
              </Menu.Item>
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
            <Row gutter={19}>
              <Col span={20} />
              {/* <Col span={2}>
                <div className="fs-4 text text-right">
                  <BellOutlined />
                </div>
              </Col> */}
              <Col span={4}>
                <Popover content={content} title="User Profile">
                  <Space>
                    <Avatar
                      className="mb-3"
                      width={400}
                      // src={!state.avatar ? userAvatar : state.avatar}
                      src="https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg"
                    />
                    <p>Mengtry</p>
                  </Space>
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
