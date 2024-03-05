import React from "react";
import {Container, Col, Row} from 'react-bootstrap';

import  './styles.scss';

type ServicePackSectionProps = {
    bgColor?: string,
    flipSide?: boolean,
    title?: string,
    text?: string,
    price?: string,
    pImg?: string,
    children?: React.ReactNode
}

const ServicePackSection: React.FC<ServicePackSectionProps> = ({bgColor, flipSide, title, text, price, pImg, children}) => {
    return (
        <div className={'service-pack-section'} style={{backgroundColor: `${bgColor}`}}>
            <Container>
                <div className={'package-container'}>
                    <div className={'package-header'}>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                    <Row className={flipSide ? 'flip-sides' : ''}>
                        <Col  sm={12} md={6} style={{textAlign: 'center'}}>
                            <img src={pImg} alt=""/>
                            <div className={'price'}>${price}</div>
                        </Col>
                        <Col sm={12} md={6}>
                            {children}
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
};

export default ServicePackSection;
