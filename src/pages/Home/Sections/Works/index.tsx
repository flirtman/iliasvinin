import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import work1 from '../../../../assets/img/work1.png';
import work2 from '../../../../assets/img/work2.png';
import work3 from '../../../../assets/img/work3.png';
import work4 from '../../../../assets/img/work4.png';
import work5 from '../../../../assets/img/work5.png';
import work6 from '../../../../assets/img/work6.png';

import "animate.css/animate.min.css";
import 'animate.css';

import './styles.scss';
import SectionTitle from "../../../../components/SectionTitle";
import ScrollAnimation from "react-animate-on-scroll";

const SectionWorks = () => {
    return (
        <section className={'section-works'}>
            <Container>
                <ScrollAnimation animateIn='fadeIn' delay={200}>
                    <SectionTitle text={'Creative Works'} color={'primary'}/>
                </ScrollAnimation>
                <br/>
                <br/>
                <div className={'corner-left-top'}></div>
                <ScrollAnimation animateIn='fadeIn' delay={200}>
                    <Row>
                    <Col md={4} >
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={work1} alt="Avatar"  />
                                </div>
                                <div className="flip-card-back">
                                    <h1>HandymanABC</h1>
                                    <p>Professional handyman Services</p>
                                    <p>ReactJS</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} >
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={work2} alt="Avatar"  />
                                </div>
                                <div className="flip-card-back">
                                    <h1>JLB Sport Rarities</h1>
                                    <p>Hockey rarities</p>
                                    <p>WooCommerce</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} >
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={work3} alt="Avatar"  />
                                </div>
                                <div className="flip-card-back">
                                    <h1>Oksana Skin Care</h1>
                                    <p>Professional skin care</p>
                                    <p>ReactJS</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                </ScrollAnimation>
                <br/>
                <ScrollAnimation animateIn='fadeIn' delay={200}>
                    <Row>
                    <Col md={4} >
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={work5} alt="Avatar"  />
                                </div>
                                <div className="flip-card-back">
                                    <h1>Brudenmode</h1>
                                    <p>Unique Fashion Products</p>
                                    <p>WooCommerce</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={4} >
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={work6} alt="Avatar"  />
                                </div>
                                <div className="flip-card-back">
                                    <h1>LeonExpress</h1>
                                    <p>Professional assembly service and TV Installation</p>
                                    <p>Wordpress</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} >
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={work4} alt="Avatar"  />
                                </div>
                                <div className="flip-card-back">
                                    <h1>JustFly/flights</h1>
                                    <p>Search and Compare best deals with over 440+ airlines</p>
                                    <p>PHP/jQuery</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                </ScrollAnimation>
                <div className={'corner-right-bottom'}></div>
            </Container>

        </section>
    )
};

export default SectionWorks;
