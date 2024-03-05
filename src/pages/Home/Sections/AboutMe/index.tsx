import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import SectionTitle from "../../../../components/SectionTitle";

import './styles.scss';
import {NavLink} from "react-router-dom";
import innerRoutes from "../../../../utils/innerRoutes";

import ScrollAnimation from 'react-animate-on-scroll';

const SectionsAboutMe = () => {

    return (
        <section className={'sections-about-me'}>
            <Container>
                <Row>
                    <Col className={'col-l'}>
                        <ScrollAnimation animateIn='fadeIn' delay={200}>
                            <SectionTitle text={'About Me'} color ={"primary"} />
                            <p>
                                <span className={'large'}>Website & Web apps creation is not a job, but a journey of creative minds.</span>
                            </p>
                            <p>
                                I’m a Front-End Developer and Web Designer with extensive experience spanning over fifteen years. My expertise lies in creating turnkey website solutions as a freelancer and in UI/UX development as an employee for small to large companies.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='fadeIn' delay={2}>
                            <div className={'col-l-bottom'}>
                                <div className={'decor'}>
                                    <div className={'numb'}>15</div>
                                    <div className={'txt'}>Years Of<br/> Experience</div>
                                </div>
                                <NavLink className={'about-section-link'} to={innerRoutes.ABOUT.url}>Learn<br/>More</NavLink>
                            </div>
                        </ScrollAnimation>
                    </Col>
                    <Col className={'col-r'}>
                        <ScrollAnimation animateIn='fadeIn' delay={2}>
                            <h2 className={'title-col-r'}>Skills, Stack &<br/> Technologies:</h2>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='fadeIn' delay={2}>
                            <ul>
                                <li>HTML</li>
                                <li>CSS/SCSS</li>
                                <li>Bootstrap </li>
                                <li>Material UI</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>jQuery & React</li>
                                <li>WordPress</li>
                                <li>GIT</li>
                                <li>Photoshop</li>
                                <li>Figma</li>
                                <li>PhpStorm</li>
                                <li>Visual Studio</li>
                                <li>Jira / Bitbucket / Github</li>
                                <li>UI/UX Design</li>
                                <li>Gulp</li>
                                <li>Webpack</li>
                                <li>WHM</li>
                                <li>Premiere Pro</li>
                                <li>And more...</li>
                            </ul>
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default SectionsAboutMe;
