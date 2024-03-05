import React, {useEffect, useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import logo1 from "../../assets/img/logo1.png";
import {NavLink, useLocation} from "react-router-dom";
import {TbMenuDeep} from 'react-icons/tb';
import innerRoutes from '../../utils/innerRoutes';

import './styles.scss';

const TopNav: React.FC = () => {
    const { pathname } = useLocation();

    const [currentPosition, setCurrentPosition] = useState(0);

    useEffect(() => {
        setCurrentPosition(window.pageYOffset);
    }, []);

    window.addEventListener('scroll', function(e) {
        setCurrentPosition(window.pageYOffset);
    });

    const isActive = (currentPath: string) => {
        return currentPath === pathname ? ' active' : '';
    };
    return (
        <nav>
            <Container className={'nav-container'}>
                <Navbar collapseOnSelect expand="lg" className={`fixed-top ${currentPosition > 75 ? 'bg-dark' : ''}`}>
                    <Container>
                        <Navbar.Brand href={innerRoutes.HOME.url}><img src={logo1} alt="" style={{maxWidth: '60px'}}/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"><TbMenuDeep/></Navbar.Toggle>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto"/>
                            <Nav>
                                <NavLink className={'nav-link' + isActive( innerRoutes.HOME.url)} to={innerRoutes.HOME.url}>{innerRoutes.HOME.label}</NavLink>
                                <NavLink className={'nav-link' + isActive( innerRoutes.ABOUT.url)} to={innerRoutes.ABOUT.url}>{innerRoutes.ABOUT.label}</NavLink>
                                <NavLink className={'nav-link' + isActive( innerRoutes.SERVICES.url)} to={innerRoutes.SERVICES.url}>{innerRoutes.SERVICES.label}</NavLink>
                                <NavLink className={'nav-link' + isActive( innerRoutes.WORKS.url)} to={innerRoutes.WORKS.url}>{innerRoutes.WORKS.label}</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
            <div className={'bottom-line'}></div>
        </nav>
    )
};

export default TopNav;
