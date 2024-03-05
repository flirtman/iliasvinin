import React from "react";
import {Row, Col, Container} from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import { NavLink } from 'react-router-dom';

import bg1 from '../../assets/img/bg1.jpg';
import bg2 from '../../assets/img/bg2.png';
import ilia1 from '../../assets/img/me-home-small.png';

import { SiTypescript, SiCreatereactapp, SiBootstrap } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";



import './styles.scss';
import TopNav from "../TopNav";

const HeaderDynamic = () => {

    const genStyles1 = {
        backgroundColor: 'black',
        backgroundImage: `linear-gradient(0.75turn, rgba(1, 1, 1, 0.5), rgba(1, 1, 1, 0.75)), url(${bg1})`,
        minHeight: '100vh',
    };

    const genStyles2: React.CSSProperties = {
        backgroundImage: `url(${bg2})`,
        backgroundSize: '600px',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignContent: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'end',
        filter: 'bluer(10px)',
        backgroundPositionY: `100px`
    };


    return (
        <>
            <header className={'header-main'} style={genStyles1}>
                <TopNav/>
                <Container>
                    <Row>
                        <Col xm={12} sm={12} md={6}>
                            <div className={'left-col-cont'}>
                                <h2>
                                    Hello, I am  <br/><TypeAnimation
                                    sequence={[
                                        'Front-End Dev',
                                        1500,
                                        'Web Designer',
                                        1500,
                                        'Creative Mind',
                                        1500,
                                        'Ilia Svinin',
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{display: 'inline-block' }}
                                />
                                </h2>

                                <p><span>I believe that</span> web development and visual communication are two integral elements connected by a chain of a creator's imagination. Their purpose is to enable humankind to access, perceive, and comprehend information across time and space.</p>

                                <p>
                                    <NavLink to="tel:5145719094">P: +1 (514) 571 9094</NavLink><br/>
                                    <NavLink to="mailto:iliasvinin@gmail.com">E: iliasvinin@gmail.com </NavLink>
                                </p>
                                <div className={'used-stack'}>
                                    <p><small style={{fontSize: '70%'}}>Site developed with: </small></p>
                                    <ul>
                                        <li><SiCreatereactapp/></li>
                                        <li><SiTypescript/></li>
                                        <li><BsFiletypeScss/></li>
                                        <li><SiBootstrap/></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col style={genStyles2} className={'right-col-cont'}>
                            <img src={ilia1} alt={''} style={{maxWidth: '600px', width: '100%'}} />
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
};

export default HeaderDynamic;
