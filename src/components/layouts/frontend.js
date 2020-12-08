import React from 'react';
import "../../frontend_style.css";
import Logo from "./../../images/Cms-logo-sample-1.svg";
import { Row, Col, Image, Button, Divider, Carousel } from "antd";
import {
    MenuFoldOutlined,
    RightCircleOutlined
  } from "@ant-design/icons";

function frontend(props) {
    
    return (
        <div>
            <div className="top-menu">
                <Row>
                    <Col className="menu-logo" span={12}>
                        CMS React
                    </Col>
                    <Col className="menu-title" span={12}>
                    <i class="fas fa-grip-lines"></i> MENU
                    </Col>
                </Row>
            </div>
              {props.children}
            Footer Here
        </div>
    )
}

export default frontend
