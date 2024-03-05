import React from "react";
import HeaderDynamic from "../../components/HeaderDynamic";
import Footer from "../../components/Footer";
import {Container, Row, Col} from "react-bootstrap";

import ilia from '../../assets/img/me-works-medium.png';
import bgMain from '../../assets/img/web-development-hero-banner.jpg';
import img1 from '../../assets/img/handyman-site.png';
import img2 from '../../assets/img/before-after-2.png';
import img3 from '../../assets/img/before-after-4.png';
import img4 from '../../assets/img/handyman-site-full.png';
import img5 from '../../assets/img/handyman-lander.png';


import './styles.scss';
import ScrollAnimation from "react-animate-on-scroll";

const WorksPage: React.FC = () => {
    return (
        <div className={'works-page'}>
            <HeaderDynamic
                title={'My Works'}
                text={`Explore my Portfolio of Web Creations. My expertise in crafting online solutions tailored for diverse businesses awaits your exploration. Let's unveil the digital success stories together.`}
                imgIs={ilia}
                bgMain={bgMain}
                imgWidth={250}
            />
            <ScrollAnimation animateIn='fadeIn' delay={200}>
                <section className={'showcase'}>
                    <Container>
                        <Row sm={12} md={6}>
                            <Col sm={12} md={6}>
                                <img src={img1} alt="" className={''} style={{width: 480, maxWidth: '100%'}}/>
                            </Col>
                            <Col sm={12} md={6}>
                                <h2>HandymanABC</h2>
                                <p>HandymanABC is a versatile website dedicated to providing an array of essential handyman services across Canada. Specializing in tasks such as furniture assembly, BBQ and gazebo setup, TV mounting, flooring and tile installation, and various renovation projects, HandymanABC has become a trusted name for those seeking professional assistance with household and property needs.</p>
                                <p>Built on the robust foundation of ReactJS, the website combines modernity with efficiency. It incorporates third-party APIs to streamline email communication, ensuring clients can easily reach out for inquiries or appointments. To enhance visibility and user experience, the website employs a bilingual approach, catering to a diverse clientele. The corporate design exudes reliability and professionalism, instilling confidence in potential customers.</p>
                                <p>One standout feature of HandymanABC is its commitment to SEO optimization. By crafting dedicated landing pages using plain HTML, CSS, and jQuery for their most popular services, the site targeted to achieve higher rankings on search engines, increasing its accessibility to those in need. Additionally, HandymanABC utilizes the power of video advertising, hosting captivating promotional content with voiceovers on platforms like YouTube. These videos are strategically shared across various social media channels, expanding the company's reach and making their services known to a broader audience.</p>
                                <p>As HandymanABC continues to thrive, it remains dedicated to its mission of providing top-tier handyman services and ensuring that its online presence reflects its commitment to excellence.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6}>
                                <img src={img4} alt="" style={{maxWidth: '100%'}}/>
                            </Col>
                            <Col sm={12} md={6}>
                                <Row>
                                    <Col sm={12} md={6}>
                                        <img src={img2} alt="" style={{width: '100%'}}/>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <img src={img3} alt="" style={{width: '100%'}}/>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col sm={12} md={6}>
                                        <iframe width="100%" height="250"
                                                src="https://www.youtube.com/embed/Y6-41_mJFKA?si=OeIaA6bBoAZuqYw8"
                                                title="YouTube video player" frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen>
                                        </iframe>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <iframe width="100%" height="250"
                                                src="https://www.youtube.com/embed/sOzG-XyKEuQ?si=rlEqAOobDsE4QjF8"
                                                title="YouTube video player" frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen>
                                        </iframe>
                                    </Col>
                                </Row>
                                <br/>
                                <img src={img5} style={{maxWidth: '100%'}} alt=""/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </ScrollAnimation>


            {/*<ScrollAnimation animateIn='fadeIn' delay={200}>*/}
            {/*    <img src={SvgTop} alt="" style={{transform: 'rotate(180deg)', width: 'calc(100% + 1.3px)', position: 'relative', filter: 'invert(1.5) sepia(1) saturate(5) hue-rotate(-179deg)', marginBottom: '-1px'}}/>*/}
            {/*    <section className={'showcase'} style={{backgroundColor: 'rgb(245 244 255)'}}>*/}
            {/*        <Container>*/}
            {/*            <Row sm={12} md={6}>*/}
            {/*                <Col sm={12} md={6}>*/}
            {/*                    <img src={img1} alt="" className={''} style={{width: 480, maxWidth: '100%'}}/>*/}
            {/*                </Col>*/}
            {/*                <Col sm={12} md={6}>*/}
            {/*                    <h2>HandymanABC</h2>*/}
            {/*                    <p>HandymanABC is a versatile website dedicated to providing an array of essential handyman services across Canada. Specializing in tasks such as furniture assembly, BBQ and gazebo setup, TV mounting, flooring and tile installation, and various renovation projects, HandymanABC has become a trusted name for those seeking professional assistance with household and property needs.</p>*/}
            {/*                    <p>Built on the robust foundation of ReactJS, the website combines modernity with efficiency. It incorporates third-party APIs to streamline email communication, ensuring clients can easily reach out for inquiries or appointments. To enhance visibility and user experience, the website employs a bilingual approach, catering to a diverse clientele. The corporate design exudes reliability and professionalism, instilling confidence in potential customers.</p>*/}
            {/*                    <p>One standout feature of HandymanABC is its commitment to SEO optimization. By crafting dedicated landing pages using plain HTML, CSS, and jQuery for their most popular services, the site targeted to achieve higher rankings on search engines, increasing its accessibility to those in need. Additionally, HandymanABC utilizes the power of video advertising, hosting captivating promotional content with voiceovers on platforms like YouTube. These videos are strategically shared across various social media channels, expanding the company's reach and making their services known to a broader audience.</p>*/}
            {/*                    <p>As HandymanABC continues to thrive, it remains dedicated to its mission of providing top-tier handyman services and ensuring that its online presence reflects its commitment to excellence.</p>*/}
            {/*                </Col>*/}
            {/*            </Row>*/}
            {/*            <Row>*/}
            {/*                <Col sm={12} md={6}>*/}
            {/*                    <img src={img4} alt="" style={{maxWidth: '100%'}}/>*/}
            {/*                </Col>*/}
            {/*                <Col sm={12} md={6}>*/}
            {/*                    <Row>*/}
            {/*                        <Col sm={12} md={6}>*/}
            {/*                            <img src={img2} alt="" style={{width: '100%'}}/>*/}
            {/*                        </Col>*/}
            {/*                        <Col sm={12} md={6}>*/}
            {/*                            <img src={img3} alt="" style={{width: '100%'}}/>*/}
            {/*                        </Col>*/}
            {/*                    </Row>*/}
            {/*                    <br/>*/}
            {/*                    <Row>*/}
            {/*                        <Col sm={12} md={6}>*/}
            {/*                            <iframe width="100%" height="250"*/}
            {/*                                    src="https://www.youtube.com/embed/Y6-41_mJFKA?si=OeIaA6bBoAZuqYw8"*/}
            {/*                                    title="YouTube video player" frameBorder="0"*/}
            {/*                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
            {/*                                    allowFullScreen>*/}
            {/*                            </iframe>*/}
            {/*                        </Col>*/}
            {/*                        <Col sm={12} md={6}>*/}
            {/*                            <iframe width="100%" height="250"*/}
            {/*                                    src="https://www.youtube.com/embed/sOzG-XyKEuQ?si=rlEqAOobDsE4QjF8"*/}
            {/*                                    title="YouTube video player" frameBorder="0"*/}
            {/*                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
            {/*                                    allowFullScreen>*/}
            {/*                            </iframe>*/}
            {/*                        </Col>*/}
            {/*                    </Row>*/}
            {/*                    <br/>*/}
            {/*                    <img src={img5} style={{maxWidth: '100%'}} alt=""/>*/}
            {/*                </Col>*/}
            {/*            </Row>*/}
            {/*        </Container>*/}
            {/*    </section>*/}
            {/*    <img src={SvgTop} alt="" style={{ width: 'calc(100% + 1.3px)', position: 'relative', filter: 'invert(1.5) sepia(1) saturate(5) hue-rotate(-179deg)', marginBottom: '-1px'}}/>*/}
            {/*</ScrollAnimation>*/}
            <Footer/>
        </div>
    )
};

export default WorksPage;
