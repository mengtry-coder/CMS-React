import React, {useState} from 'react';
import "../../frontend_style.scss";
import Logo from "./../../images/Cms-logo-sample-1.svg";
import { Link } from "react-router-dom";
import { Row, Col, Space, Modal } from "antd";
import {
    MinusOutlined,
    HomeOutlined,

  } from "@ant-design/icons";

function Frontend(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    
    return (
        <div>
            <div className="top-menu">
                <Row>
                    <Col className="menu-logo" span={12}>
                        CMS React
                    </Col>
                    <Col className="menu-title" onClick={showModal} span={12}>
                        <i class="fas fa-grip-lines"></i> MENU
                    </Col>
                </Row>
                <Modal
                    title="CMS React"
                    visible={isModalVisible} 
                    onOk={handleOk} 
                    footer={false}
                    onCancel={handleCancel}
                >
                    <ul>
                        <li><Link to="#"><HomeOutlined /> Home</Link></li>
                        <li><Link to="#"><HomeOutlined /> About Us</Link></li>
                        <li><Link to="#"><HomeOutlined /> Portfolio</Link></li>
                        <li><Link to="#"><HomeOutlined /> Contact Us</Link></li>
                        <li><Link to="#"><HomeOutlined /> Deal</Link></li>
                    </ul>
                </Modal>
            </div>
              {props.children}
            <div className="footer container mt-5 mb-5">
                <Row>
                    <Col span={6} order={1}>
                        <h3 className="text-light">WTCycle</h3>
                        <Space size={20}>
                            <i class="fab fa-facebook-f outline-social"></i>
                            <i class="fab fa-facebook-messenger outline-social"></i>
                            <i class="fab fa-telegram-plane outline-social"></i>
                        </Space>
                    </Col>
                    <Col span={6} order={2}>
                        <h3 className="text-light">Navigation</h3>
                        <MinusOutlined /><br></br>
                        <a>PORTFOLIO</a><br></br>
                        <a>ABOUT</a><br></br>
                        <a>NEWS</a><br></br>
                        <a>CONTACT</a><br></br>
                    </Col>
                    <Col span={6} order={3}>
                        <h3 className="text-light">Get In Touch</h3>
                        <MinusOutlined /><br></br>
                        <b>T</b> : 086 293 500 <br></br>
                        <b>F</b> : 023 293 500 <br></br>
                        <b>T</b> : info@wtcycle.com
                    </Col>
                    <Col span={6} order={4}>
                        <h3 className="text-light">Address</h3>
                        <MinusOutlined />
                        <p>Jomkamon-Keng Kong I- Pnom Penh <br></br>Cambodia</p>
                    </Col>
                </Row>
                <hr className="text-light"></hr>
                <div className="mt-5 mb-5">
                    <p className="text-center">
                        2020 WEB TECHNOLOYG CYCLE | WEB APPLICATION | WEB DESIGN | UX/UI DESIGN <br></br>
                        Design By WTCycle Team
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Frontend
