import React from "react";
import {Row, Col, Container} from 'react-bootstrap';

import './styles.scss';
import TopNav from "../TopNav";

type HeaderDynamicProps = {
    title?: string,
    text?: string,
    imgIs?: string,
    extraStyles?: object,
    bgMain?: string,
    imgWidth?: string | number
}

const HeaderDynamic: React.FC <HeaderDynamicProps> = ({title, text, imgIs, extraStyles, bgMain, imgWidth}) => {
    const genStyles1: React.CSSProperties = {
        backgroundImage: `linear-gradient(0.75turn, rgba(1, 1, 1, 0.5), rgba(1, 1, 1, 0.75)), url(${bgMain})`,
        minHeight: '60vh'
    };

    const genStyles2: React.CSSProperties = {
        backgroundSize: '600px',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'center',
        display: 'flex',
        alignContent: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'end',
        filter: 'bluer(10px)'
    };

    return (
        <>
            <header className={'header-dynamic'} style={{...genStyles1, ...extraStyles}}>
                <TopNav/>
                <Container style={{minHeight: '50vh'}}>
                    <Row>
                        <Col xm={12} sm={12} md={6}>
                            <div className={'left-col-cont'}>
                                <h2>
                                    {title}
                                </h2>
                                <p>{text}</p>
                            </div>
                        </Col>
                        <Col style={genStyles2} className={'right-col-cont'}>
                            {imgIs && (<img src={imgIs} alt={''} style={{width: imgWidth}}/>)}
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
};

export default HeaderDynamic;
