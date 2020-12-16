import React from 'react'
import FrontendLayout from '../components/layouts/frontend';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import "../frontend_style.css";
import { Row, Col, Image, Button, Divider, Carousel } from "antd";
function index() {
    return (
        <div>
            <ParallaxProvider>
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
                            </Carousel>
                        </Col>
                    </Row>
                </div>
                <div className="about_us">
                    <Row>
                        <Col className="about_us_description" span={12}>
                            <div className="about_us_title">
                                <h1>Hello we are, <br></br>WTCycle</h1>
                            </div>
                            <div className="about_us_detail">
                                <p>The next generation of our icon library + toolkit is coming with more icons, more styles, more services, and more awesome.
                                    Pre-order now to get access to our alpha and future releases!</p>
                                    <h1>
                                        OUR NEW SERVICE
                                    </h1>
                                    <p>Digital Selling</p>
                                    <h1>25</h1>
                                    <p>Provinces support</p>
                            </div>
                        </Col>
                        <Col className="about_us_feature_image" span={12}>
                            <ParallaxBanner
                                className=""
                                layers={[
                                    {
                                        image: "https://www.free-mockup.com/wp-content/uploads/edd/2020/05/Free-Apple-Multi-Device-Mockup-Top-View-1000x750.jpg",
                                        amount: 0.5,
                                    },
                                ]}
                            />
                        </Col>
                    </Row>
                </div>
                <div className="our_service text-light">
                    <li>OUR SERVICE</li>
                    <h1 className="text-light">New Branding Agency</h1>
                    <Row >
                        <Col span={8} order={1}>
                            <div className="service_item text-center">
                                <i class="fas fa-donate"></i>
                                <h1>Digital Product</h1>
                                <p>Professional Website Design Company in Cambodia | Phnom Penh | Digital Marketing Solutions. Trusted by more than 1,000 companies in Website Design and Web Hosting.</p>
                            </div>
                        </Col>
                        <Col span={8} order={2}>
                            <div className="service_item text-center">
                                <i class="fas fa-donate"></i>
                                <h1>Digital Product</h1>
                                <p>Professional Website Design Company in Cambodia | Phnom Penh | Digital Marketing Solutions. Trusted by more than 1,000 companies in Website Design and Web Hosting.</p>
                            </div>
                        </Col>
                        <Col span={8} order={3}>
                            <div className="service_item text-center">
                                <i class="fas fa-donate"></i>
                                <h1>Digital Product</h1>
                                <p>Professional Website Design Company in Cambodia | Phnom Penh | Digital Marketing Solutions. Trusted by more than 1,000 companies in Website Design and Web Hosting.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                </FrontendLayout>
            </ParallaxProvider>
        </div>
    )
}

export default index
