import React, {useEffect} from "react";

import {Container, Row} from "react-bootstrap";
import {NavLink, useLocation} from 'react-router-dom';
import innerRoutes from '../../utils/innerRoutes';

import './styles.scss';

const Footer: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // window.scrollTo(0, 0);
    }, [pathname]);

    const year = new Date().getFullYear();
    return (
        <footer>
            <Container>
                <Row>
                    <ul>
                        <li><NavLink to={innerRoutes.HOME.url}>{innerRoutes.HOME.label}</NavLink></li>
                        <li><NavLink to={innerRoutes.ABOUT.url}>{innerRoutes.ABOUT.label}</NavLink></li>
                        <li><NavLink to={innerRoutes.SERVICES.url}>{innerRoutes.SERVICES.label}</NavLink></li>
                        <li><NavLink to={innerRoutes.WORKS.url}>{innerRoutes.WORKS.label}</NavLink></li>
                    </ul>
                    <p>Copyright {year} iliasvinin.com</p>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;
