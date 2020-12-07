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
                        <MenuFoldOutlined /> MENU
                    </Col>
                </Row>
            </div>
            <div className="cover-image">
                <Row>
                    <Col className="right-corner" span={5}>
                        
                    </Col>
                    <Col className="menu-title" span={19}>
                        <Carousel autoplay>
                            <div className="slider">
                                <Image src="https://wallup.net/wp-content/uploads/2017/11/17/230769-luxury_watches-watch.jpg" />
                            </div>
                            <div className="slider">
                                <Image src="https://free4kwallpapers.com/uploads/originals/2020/05/12/clock-mechanism-by-frank-pfeiffer-wallpaper.jpg" />
                            </div>
                        </Carousel>,
                    </Col>
                    <div className="cover-text">
                        <p>________ Brands</p>
                        <p className="brand_title">Web Technology Cycle</p>
                        <p>Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.</p>
                        <br></br><br></br><a className="view_more" href=""><RightCircleOutlined />   View More</a>
                    </div>
                </Row>
            </div>
              {props.children}
            Footer Here
        </div>
    )
}

export default frontend
