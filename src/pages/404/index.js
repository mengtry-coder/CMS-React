/** @format */

import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../components/layouts/layout";
import { Empty } from "antd";
import styled from "styled-components";
import NotFound from "./../../images/not_found.svg";
import { Image } from "antd";
const Page404 = (props) => {
  return (
    <MainLayout>
        <div className="text-center">
          <Image
          width={500}
          src={NotFound} />
          <p>404 Page not found!!</p>
          <Link to="/admin">
              Go to Dashboard
          </Link>
        </div>
    </MainLayout>
  );
};
export default Page404;
