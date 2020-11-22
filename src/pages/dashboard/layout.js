import React, { useState, useEffect, useCallback } from "react";
import { Layout, Menu, Breadcrumb, Image, Popconfirm, Col, Row } from "antd";
import { Link } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
  FormOutlined,
  DiffOutlined,
} from "@ant-design/icons";
import * as actionsAuth from "../../stores/actions/auth";
import { useDispatch } from "react-redux";
import User from "../../pages/users/index";
import "../../MainStyle.css";
const MainLayout = (props) => {
    const { Header, Content, Footer, Sider } = Layout;
    const { SubMenu } = Menu;
    const [collapsed, setCallaped] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);
        fetchUserFromFirestore().then(() => {
        setIsLoading(false);
        });
    }, [fetchUserFromFirestore]);
    const text = "Are you sure to logout?";
    return (
        <div className={props.class}>
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
                    <Link to='/dashboard'>Dashboard</Link>
                </Menu.Item>
                <SubMenu key='sub1' icon={<DesktopOutlined />} title='MISC'>
                    <Menu.Item key='3'>
                    <Link to='/user/index'>User</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key='sub2' icon={<DiffOutlined />} title='Setup'>
                    <Menu.Item key='6'>
                    <Link to='/country/index'>Country</Link>
                    </Menu.Item>
                    <Menu.Item key='8'>
                    <Link to='/city/index'>City</Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key='sub3' icon={<FormOutlined />} title='CMS'>
                    <Menu.Item key='9'>
                    <Link to='/custom-image/index'>Custom Image</Link>
                    </Menu.Item>
                    <Menu.Item key='10'>
                    <Link to='/custom-text/index'>Custom Text</Link>
                    </Menu.Item>
                </SubMenu>
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
                            title={text}
                            // onConfirm={confirm}
                            okText='Yes'
                            cancelText='No'>
                            <LogoutOutlined /> Logout
                        </Popconfirm>
                        </Col>
                    </Row>
                    </Header>
                    <Content style={{ margin: "0 16px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>User / Index</Breadcrumb>
                    <div
                        className='site-layout-background'
                        style={{ padding: 24, minHeight: 360 }}>
                        {/* Main */}
                        {props.children}
                        <User isLoading={isLoading}/>
                        {/* */}
                    </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                    CMS React ©2020 Created by TNR Developer Team
                    </Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default MainLayout
