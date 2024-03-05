import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import "./styles.scss";
import SectionTitle from "../../../../components/SectionTitle";
import ScrollAnimation from "react-animate-on-scroll";

const imgdemo = 'https://hips.hearstapps.com/hmg-prod/images/scenic-view-of-waterfall-in-forest-newton-abbot-royalty-free-image-1681937445.jpg';

const SectionBlog = () => {
    return (
        <section className={'section-blog'}>
            <Container>
                <ScrollAnimation animateIn='fadeIn' delay={200}>
                    <SectionTitle text={'Blog'} color={''}/>
                    <br/>
                    <br/>
                    <Row>
                        <Col sm={12} md={6} >
                            <NavLink to={'#'} className={'post-cont-large'} >
                                <div className={'post-details'}>Post title goes here and there...</div>
                                <img src={imgdemo} alt=""/>
                            </NavLink>
                        </Col>
                        <Col  sm={12} md={6} className={'col-r'}>
                            <div>
                                <ul className={'post-ul'}>
                                    <li className={'post-list'}>
                                        <NavLink to="#">
                                            <div className={'img-cont'}>
                                                <img src={imgdemo} alt=""/>
                                            </div>
                                            <div className={'post-details'}>
                                                Post title goes here and there...
                                            </div>
                                        </NavLink>
                                        <div className="decor"></div>
                                    </li>
                                    <li className={'post-list'}>
                                        <a href="#">
                                            <div className={'img-cont'}>
                                                <img src={imgdemo} alt=""/>
                                            </div>
                                            <div className={'post-details'}>
                                                Post title goes here and there...
                                            </div>
                                        </a>
                                        <div className="decor"></div>
                                    </li>
                                    <li className={'post-list'}>
                                        <NavLink to="#">
                                            <div className={'img-cont'}>
                                                <img src={imgdemo} alt=""/>
                                            </div>
                                            <div className={'post-details'}>
                                                Post title goes here and there...
                                            </div>
                                        </NavLink>
                                        <div className="decor"></div>
                                    </li>
                                    <li className={'post-list'}>
                                        <a href="#">
                                            <div className={'img-cont'}>
                                                <img src={imgdemo} alt=""/>
                                            </div>
                                            <div className={'post-details'}>
                                                Post title goes here and there...
                                            </div>
                                        </a>
                                        <div className="decor"></div>
                                    </li>
                                    <li className={'post-list'}>
                                        <NavLink to="#">
                                            <div className={'img-cont'}>
                                                <img src={imgdemo} alt=""/>
                                            </div>
                                            <div className={'post-details'}>
                                                Post title goes here and there...
                                            </div>
                                        </NavLink>
                                        <div className="decor"></div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </ScrollAnimation>
            </Container>
        </section>
    )
};

export default SectionBlog;
