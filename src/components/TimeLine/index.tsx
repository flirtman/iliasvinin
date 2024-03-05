import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {NavLink} from 'react-router-dom';

import {MdOutlineWorkOutline } from 'react-icons/md';
import {IoIosSchool} from 'react-icons/io';
import {AiFillStar} from 'react-icons/ai';

import FligtHubLogo from '../../assets/img/logo-flighthub.svg';
import DesignNRankLogo from '../../assets/img/DESIGN-I-RANK.png';
import AirCanadaLogo from '../../assets/img/aircanada_logo.svg';
import SeedboxLogo from '../../assets/img/seedbox_logo.png';
import CMAdesignsLogo from '../../assets/img/CMAdesigns.png';
import ICSCanadaLogo from '../../assets/img/ics_logo.jpg';
import ORTLogo from '../../assets/img/ort.png';
import ConcordiaLogo from '../../assets/img/concordia-logo.png';
import UdemyLogo from '../../assets/img/logo-coral.svg';
import NixaLogo from '../../assets/img/nixa-logo.png';
import KoiosLogo from '../../assets/img/koios_logo.png';

const TimeLine : React.FC = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jan 2024 - Current"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdOutlineWorkOutline />}
            >
                <h3 className="vertical-timeline-element-title">
                    <img src={KoiosLogo} alt={'Koios Intelligence'} width={200}/>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Montreal, QC, Canada</h4>
                <p>Senior Front-End Developer</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2023"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<IoIosSchool />}
            >
                <h3 className="vertical-timeline-element-title">
                    <img src={UdemyLogo} alt={'Udemy'} width={150}/>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Online</h4>
                <p>
                    <NavLink to="https://www.udemy.com/certificate/UC-67534e9d-1736-4ffd-92f5-34e43eff200b/" target={'_blank'} rel="noreferrer" >Understanding TypeScript - Certificates</NavLink>
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jan 2021 - Dec 2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdOutlineWorkOutline />}
            >
                <h3 className="vertical-timeline-element-title">
                    <img src={NixaLogo} alt={'FlightHub'} width={200}/>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Montreal, QC, Canada</h4>
                <p>Lead Front-End Developer</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Apr 2017 - May 2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdOutlineWorkOutline />}
            >
                <h3 className="vertical-timeline-element-title">
                    <img src={FligtHubLogo} alt={'FlightHub'} width={200}/>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Montreal, QC, Canada</h4>
                <p>Front-End Developer / Web Designer</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2016"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<IoIosSchool />}
            >
                <h3 className="vertical-timeline-element-title">
                    <img src={UdemyLogo} alt={'Udemy'} width={150}/>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Online</h4>
                <p>
                    <NavLink to="https://www.udemy.com/certificate/UC-LQAW7XMJ/" target={'_blank'} rel="noreferrer" >
                        Automate Web Development With Gulp JS - Certificates
                    </NavLink>
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="January 2016 - June 2016"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdOutlineWorkOutline />}
            >
                <h3 className="vertical-timeline-element-title">
                    <img src={DesignNRankLogo} alt={'Design N Rank'} width={200}/>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Montreal, QC, Canada</h4>
                <p>Front-End Developer / Web Designer</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2015 – December 2015"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdOutlineWorkOutline />}
            >
                <h3 className="vertical-timeline-element-title">
                    <img src={AirCanadaLogo} alt={'Air Canada'} width={200}/>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Montreal, QC, Canada</h4>
                <p>Front-End Developer</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<IoIosSchool />}
            >
                <h3 className="vertical-timeline-element-title">
                    <img src={ConcordiaLogo} alt={'Concordia'} width={200}/>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Montreal, QC, Canada</h4>
                <p>
                    JavaScript and AJAX - Certificates
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="November 2011 – July 2014"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdOutlineWorkOutline />}
            >
                <h3 className="vertical-timeline-element-title">
                    <img src={SeedboxLogo} alt={'Seedbox'} width={200}/>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Montreal, QC, Canada</h4>
                <p>Web Designer / Integrator</p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2010"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<IoIosSchool />}
            >
                <h3 className="vertical-timeline-element-title">
                    <img src={ConcordiaLogo} alt={'Concordia'} width={200}/>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Montreal, QC, Canada</h4>
                <p>
                    C++, XHTML, MySQL - Certificates
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="June 2010 - November 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdOutlineWorkOutline />}
            >
                <h3 className="vertical-timeline-element-title">
                    <img src={CMAdesignsLogo} alt={'CMA Designs'} width={200}/>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Montreal, QC, Canada</h4>
                <p>Web Designer / Web Developer</p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2007"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<IoIosSchool />}
            >
                <h3 className="vertical-timeline-element-title">
                    <img src={ICSCanadaLogo} alt={'I.C.S Canada'} width={150}/>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Westmount, QC, Canada</h4>
                <p>
                    Web Page Designer - Career Diploma
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<IoIosSchool />}
            >
                <h3 className="vertical-timeline-element-title">
                    <img src={ORTLogo} alt={'ORT Braude Kramim'} width={150}/>
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Karmiel, Israel</h4>
                <p>
                    Fine Arts
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<AiFillStar />}
            />
        </VerticalTimeline>
    )
};

export default TimeLine;
