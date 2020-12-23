import React from 'react'
import FrontendLayout from '../components/layouts/frontend';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import "../frontend_style.scss";
import { Row, Col, Image, Button, Carousel, Space } from "antd";
import {
    MinusOutlined,
  } from "@ant-design/icons";
function index() {
    return (
        <div className="frontend-body">
            <ParallaxProvider>
                <FrontendLayout>
                <div className="cover-image">
                    <Row>
                        <Col className="right-corner" span={5}>
                            <div className="social_sharing">
                                <i class="fal fa-share-alt"></i>
                            </div>
                            <div className="social_media">
                                <Space size={10}>
                                    <MinusOutlined />
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-facebook-messenger"></i>
                                    <i class="fab fa-telegram-plane"></i>
                                </Space>
                            </div>
                            
                        </Col>
                        <Col className="menu-title" span={19}>
                            <Carousel autoplay>
                                <div className="slider">
                                    <ParallaxBanner
                                        layers={[
                                            {
                                                image: "https://mockuptree.com/wp-content/uploads/edd/2019/07/free-macbook-air-mock-up.jpg",
                                                amount: 0.1,
                                            },
                                        ]}
                                        style={{
                                            height: '750px',
                                        }}
                                    />
                                </div>
                                <div className="slider">
                                    <ParallaxBanner
                                        layers={[
                                            {
                                                image: "https://free4kwallpapers.com/uploads/originals/2020/05/12/clock-mechanism-by-frank-pfeiffer-wallpaper.jpg",
                                                amount: 0.5,
                                            },
                                        ]}
                                        style={{
                                            height: '750px',
                                        }}
                                    />
                                </div>
                            </Carousel>
                        </Col>
                    </Row>
                </div>
                <div className="cover-text">
                    <p>________ Brands</p>
                    <p className="brand_title">Web Technology Cycle</p>
                    <p>Cal was first. <br></br>The first public university in the great state of California. <br></br> They are the pioneers. They are the trailblazers who started it all.</p>
                    <br></br><br></br><a className="view_more" href=""><i class="fas fa-chevron-circle-right"></i>   View More</a>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="about_us container">
                    <Row>
                        <Col className="about_us_description" span={12}>
                            <div className="about_us_title">
                                <h1 className="text-light">Hello we are, <br></br>WTCycle</h1>
                            </div>
                            <div className="about_us_detail">
                                <p>The next generation of our icon library + toolkit is coming with more icons, more styles, more services, and more awesome.
                                    Pre-order now to get access to our alpha and future releases!</p>
                                    <h1 className="text-light">
                                        OUR NEW SERVICE
                                    </h1>
                                    <p>Digital Selling</p>
                                    <Space size={24}>
                                        <h1 className="text-light">25</h1>
                                        <p>Provinces support</p>
                                    </Space>
                            </div>
                        </Col>
                        <Col className="about_us_feature_image" span={12}>
                            <Image
                                src="https://www.free-mockup.com/wp-content/uploads/edd/2020/05/Free-Apple-Multi-Device-Mockup-Top-View-1000x750.jpg"
                            />
                        </Col>
                    </Row>
                </div>
                <div className="our_service text-light container">
                    <div className="mt-5 mb-5">
                        <li>OUR SERVICE</li>
                        <h1 className="text-light">New Branding Agency</h1>
                    </div>
                    <Row>
                        <Col span={8} order={1}>
                            <div className="service_item text-center p-5">
                                <i class="fas fa-donate size_icon"></i>
                                <br></br>
                                <h3 className="text-light">Direct & Indirect Meeting</h3>
                                <p>Professional Website Design Company in Cambodia | Phnom Penh | Digital Marketing Solutions. Trusted by more than 1,000 companies in Website Design and Web Hosting.</p>
                            </div>
                        </Col>
                        <Col span={8} order={2}>
                            <div className="service_item text-center bg-dark p-5">
                                <i class="fab fa-accusoft size_icon"></i>
                                <br></br>
                                <h3 className="text-light">Innovation Creative Design</h3>
                                <p>Professional Website Design Company in Cambodia | Phnom Penh | Digital Marketing Solutions. Trusted by more than 1,000 companies in Website Design and Web Hosting.</p>
                            </div>
                        </Col>
                        <Col span={8} order={3}>
                            <div className="service_item text-center p-5">
                                <i class="fab fa-amazon-pay size_icon"></i>
                                <br></br>
                                <h3 className="text-light">Online Payment Process</h3>
                                <p>Professional Website Design Company in Cambodia | Phnom Penh | Digital Marketing Solutions. Trusted by more than 1,000 companies in Website Design and Web Hosting.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <br></br>
                <br></br>
                <div className="text-light training_section mt-5 mb-5">
                    <ParallaxBanner
                        layers={[
                            {
                                image: "https://mckups.com/wp-content/uploads/2020/02/Free-MacBook-Pro-mockup-on-a-couch-preview.jpg",
                                amount: 0.3,
                            },
                        ]}
                        style={{
                            height: '900px',
                        }}
                    />
                    <div className="training">
                        <Row>
                            <Col span={12} order={1} />
                            <Col className="description-training container center px-5" span={12} order={2}>
                                <div className="how_we">
                                    <h1 className="text-light">How we <br></br>provide Training?</h1>
                                    <p className="px-5">Spacing utilities that apply to all breakpoints, from xs to xxl, have no breakpoint abbreviation in them. This is because those classes are applied from min-width: 0 and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.</p>
                                    <br></br><br></br><a className="view_more" href=""><i class="fas fa-chevron-circle-right"></i>   View More</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="portfolio">
                        <div className="mt-5 mb-5 container">
                            <li>PORTFOLIO</li>
                            <h1 className="text-light">New Template For More Options</h1>
                        </div>
                        <Row gutter={[24, 16]}>
                            <Col span={8} order={1}>
                                <div className="portfolio_item text-center">
                                    <Image
                                        className="portfolio_img"
                                        src="https://dmm40cf0lyret.cloudfront.net/wp-content/uploads/2020/08/disen%CC%83o-pa%CC%81ginas-web.jpg"
                                    />
                                    <div className="overlay" />
                                    <div className="portfolio_title">
                                        <p>E-Comerce</p>
                                        <h2 className="text-light">Selling - Shopping</h2>
                                    </div>
                                </div>
                            </Col>
                            <Col span={8} order={1}>
                                <div className="portfolio_item text-center">
                                    <Image
                                        className="portfolio_img"
                                        src="https://guerillacreativemarketing.com/wp-content/uploads/2019/07/Web-Design-Development-Advanced-Based.jpg"
                                    />
                                    <div className="overlay" />
                                    <div className="portfolio_title">
                                        <p>E-Comerce</p>
                                        <h2 className="text-light">Selling - Shopping</h2>
                                    </div>
                                </div>
                            </Col>
                            <Col span={8} order={1}>
                                <div className="portfolio_item text-center">
                                    <Image
                                        className="portfolio_img"
                                        src="https://images.anytask.com/ae88a70249b27abd/gig/wr7b5ojurdycsv2qsgbj.png"
                                    />
                                    <div className="overlay" />
                                    <div className="portfolio_title">
                                        <p>E-Comerce</p>
                                        <h2 className="text-light">Selling - Shopping</h2>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                </FrontendLayout>
            </ParallaxProvider>
        </div>
    )
}

export default index
