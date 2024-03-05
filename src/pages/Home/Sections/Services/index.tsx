import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Container} from "react-bootstrap";

import './styles.scss';
import SectionTitle from "../../../../components/SectionTitle";
import ScrollAnimation from 'react-animate-on-scroll';

const SectionsServices: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className={'sections-services'}>
            <Container>
                <ScrollAnimation animateIn='fadeIn' delay={200}>
                    <SectionTitle text={'Services'} color={''}/>
                </ScrollAnimation>
                <br/>
                <br/>
                <br/>

                <ScrollAnimation animateIn='fadeIn' delay={200}>
                    <Slider {...settings}>
                    <div className={'card'}>
                        <h3>One Page Website</h3>
                        <p>A one-page website, also known as a single-page website, is a type of website design that presents all its content on a single, long-scrolling web page. Unlike traditional multi-page websites, where each page is dedicated to specific content or functions (such as a homepage, about page, contact page, etc.), a one-page website condenses all of its information into a single continuous page.</p>
                        {/*<div className={'price'}>$850*</div>*/}
                    </div>
                    <div className={'card'}>
                        <h3>Custom Website</h3>
                        <p>A custom website, often referred to as a custom-built website or bespoke website, is a website that is uniquely designed and developed to meet the specific needs and requirements of a particular individual, business, or organization. Unlike template-based websites, which use pre-designed layouts and structures that can be easily customized, custom websites are built from the ground up, tailored to the client's exact specifications.</p>
                        {/*<div className={'price'}>$1940*</div>*/}
                    </div>
                    <div className={'card'}>
                        <h3>CMS Website</h3>
                        <p>A Content Management System (CMS) website is a type of website that is built and managed using a content management system, which is a software application designed to simplify the creation, editing, organization, and publication of digital content. CMS websites are popular because they allow individuals, businesses, and organizations to easily create and update web content without requiring advanced technical skills or coding knowledge.</p>
                        {/*<div className={'price'}>$3580*</div>*/}
                    </div>
                    <div className={'card'}>
                        <h3>Logo Design</h3>
                        <p>Logo development, also known as logo design or logo creation, is the process of conceptualizing, designing, and creating a visual symbol or mark that represents a brand, company, organization, product, or individual. Logos are a fundamental element of branding and play a crucial role in conveying the identity, values, and personality of the entity they represent. Here are the key steps involved in logo development.</p>
                        {/*<div className={'price'}>$250*</div>*/}
                    </div>
                </Slider>
                </ScrollAnimation>
                <br/>
                <br/>
                <ScrollAnimation animateIn='fadeIn' delay={200}>
                    <p style={{textAlign: 'center', color: 'white', fontSize: '80%'}}>
                        * Hosting and domain costs are not included in the final price <br/> of the packages and are a matter of third-party deals.
                    </p>
                </ScrollAnimation>
            </Container>
        </section>
    )
};

export default SectionsServices;
