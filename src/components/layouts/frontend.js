import React from 'react';
import "../../frontend_style.css";
import Logo from "./../../images/Cms-logo-sample-1.svg";
import { Row, Col, Image } from "antd";
import {
    MenuFoldOutlined
  } from "@ant-design/icons";

function frontend(props) {
    return (
        <div>
            <div className="top-menu">
                <Row>
                    <Col span={12}>
                        <Image
                            width={40}
                            src={Logo} 
                        />
                    </Col>
                    <Col className="menu-title" span={12}>
                        <MenuFoldOutlined /> MENU
                    </Col>
                </Row>
            </div>
            <div className="cover-image">
                <Image src="https://wallup.net/wp-content/uploads/2017/11/17/230769-luxury_watches-watch.jpg" />
            </div>
              {props.children}
            Footer Here
        </div>
    )
}

export default frontend
