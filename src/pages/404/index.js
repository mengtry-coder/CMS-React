/** @format */

import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../components/layouts/layout";
import { Empty } from "antd";
import styled from "styled-components";
const Page404 = (props) => {
  const MainText = styled.h1`
    font-size: 2em;
    color: "#fff";
  `;
  const Container = styled.div`
    display: "flex";
    justifycontent: "center";
    alignitems: "center";
    padding-left: "50%";
    background-color: "red";
  `;
  const LinkTo = styled(Link)`
    width: 10rem;
    background-color: "red";
  `;
  return (
    <MainLayout>
      <Empty />
      <Container>
        <MainText>404 Page not found!!</MainText>
        <LinkTo to="/admin">Go Dashboard</LinkTo>
      </Container>
    </MainLayout>
  );
};
export default Page404;
