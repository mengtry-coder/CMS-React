import React from 'react'
import FrontendLayout from '../components/layouts/frontend'
import "../frontend_style.css";
import { Row, Col, Image, Button, Divider, Carousel } from "antd";
function index() {
    return (
        <div>
            <FrontendLayout>
            <div className="cover-image">
                <Row>
                    <Col className="right-corner" span={5}>
                        <div className="social_sharing">
                            <i class="fal fa-share-alt"></i>
                            <div className="social_media">
                                <i>-----</i>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-facebook-messenger"></i>
                                <i class="fab fa-telegram-plane"></i>
                            </div>
                        </div>
                        
                    </Col>
                    <Col className="menu-title" span={19}>
                        <Carousel autoplay>
                            <div className="slider">
                                <div className="cover-text">
                                    <p>________ Brands</p>
                                    <p className="brand_title">Web Technology Cycle</p>
                                    <p>Cal was first. <br></br>The first public university in the great state of California. <br></br> They are the pioneers. They are the trailblazers who started it all.</p>
                                    <br></br><br></br><a className="view_more" href=""><i class="fas fa-chevron-circle-right"></i>   View More</a>
                                </div>
                                <Image src="https://wallup.net/wp-content/uploads/2017/11/17/230769-luxury_watches-watch.jpg" />
                            </div>
                            <div className="slider">
                                <Image src="https://free4kwallpapers.com/uploads/originals/2020/05/12/clock-mechanism-by-frank-pfeiffer-wallpaper.jpg" />
                            </div>
                        </Carousel>,
                    </Col>
                </Row>
            </div>
            <div className="about_us">
                <Row>
                    <Col className="about_us_description" span={12}>
                        <h1>Hello we are, <br></br>WTCycle</h1>
                        <div className="about_us_detail">
                            <p>The next generation of our icon library + toolkit is coming with more icons, more styles, more services, and more awesome.
                                Pre-order now to get access to our alpha and future releases!</p>
                        </div>
                    </Col>
                    <Col className="about_us_feature_image" span={12}>
                        <Image src="https://www.free-mockup.com/wp-content/uploads/edd/2020/05/Free-Apple-Multi-Device-Mockup-Top-View-1000x750.jpg"></Image>
                    </Col>
                </Row>
            </div>
            </FrontendLayout>
        </div>
    )
}

export default index
