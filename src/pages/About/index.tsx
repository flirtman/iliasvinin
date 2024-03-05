import React from "react";
import HeaderDynamic from "../../components/HeaderDynamic";
import Footer from "../../components/Footer";
import {Container} from "react-bootstrap";

import ilia2 from '../../assets/img/me-about-2.png';
import bgMain from '../../assets/img/bg-about.jpg';

import TimeLine from "../../components/TimeLine";

import './styles.scss';
import ResumeDownload from '../../components/ResumeDownload';
import SectionsAboutMe from "./AboutMe";
import ScrollAnimation from "react-animate-on-scroll";



const AboutPage: React.FC = () => {
    return (
        <div className={'about-page'}>
            <HeaderDynamic
                title={'About Me'}
                text={`I’m a Front-End Developer and Web Designer with extensive experience spanning over fifteen years. My expertise lies in creating turnkey website solutions as a freelancer and in UI/UX development as an employee for small to large companies.`}
                imgIs={ilia2}
                bgMain={bgMain}
                imgWidth={400}
            />
            <section className={'skills-and-tech'}>
                <Container>
                    <SectionsAboutMe/>
                </Container>
            </section>
            <ResumeDownload/>
            <section className={'timeline'} style={{backgroundColor: "rgb(218 218 218)"}}>
                <ScrollAnimation animateIn='fadeIn' delay={200}>
                    <TimeLine/>
                </ScrollAnimation>
            </section>
            <Footer/>
        </div>
    )
};

export default AboutPage;
