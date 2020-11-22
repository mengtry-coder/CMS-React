/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { Layout, Menu, Breadcrumb, Image, Popconfirm, Col, Row } from "antd";
import { Link } from "react-router-dom";
import MainLayout from "./../../components/layouts/layout"
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
import "antd/dist/antd.css";
import "../../MainStyle.css";
// import Login from '../../login/LoginForm';
// import DashboardIndex from '../../pages/dashboard/index';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const Dashboard = () => {
  const [collapsed, setCallaped] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onCollapse = (value) => {
    setCallaped(value);
  };
  // const dispatch = useDispatch();
  // const fetchUserFromFirestore = useCallback(async () => {
  //   try {
  //     await dispatch(actionsAuth.setUser());
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, [dispatch]);
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchUserFromFirestore().then(() => {
  //     setIsLoading(false);
  //   });
  // }, [fetchUserFromFirestore]);
  const text = "Are you sure to logout?";
  return (
    <div>
      <MainLayout>
          Dashboard here
      </MainLayout>

    </div>
  );
};

export default Dashboard;
