import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import SectionTitle from "../../../components/SectionTitle";

import './styles.scss';
import { MdMobileScreenShare } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { LiaToolboxSolid } from 'react-icons/lia';
import { IoSchoolOutline } from 'react-icons/io5';

const SectionsAboutMe = () => {
    return (
        <section className={'sections-about-me2'}>
            <Container>
                <Row>
                    <Col className={'col-l'} md={8}>
                        <SectionTitle text={'About Me'} color ={"primary"} />
                        <p>I’m a Front-End Developer and Web Designer with extensive experience spanning over fifteen years. My journey into website creation began with a fascination for merging visual creativity with computer science. This profession allows me to blend artistic flair with technical acumen, turning ideas into captivating digital realities.</p>

                        <p><span className={'icon'}><MdMobileScreenShare/></span> Responsive design, transforming concepts into layouts, and seamlessly integrating them into the front-end, are my core strengths. Each design I craft is tailored to meet the unique needs of clients. Whether it's a minimalistic interface or one rich in intricate elements, my approach depends on factors like the target audience and branding identity. Balancing functionality with aesthetics is at the heart of UI design, and basing layouts on wireframes ensures precision and efficiency. My process begins with empathizing and understanding the client's vision, then gathering information to define a clear direction for the prototype phase.</p>

                        <p><span className={'icon'}><HiOutlineLightBulb/></span> Challenges and Problem-Solving: When it comes to visual communication, challenges are always around the corner. The ability to communicate clearly with teams and stakeholders allows for the identification of these challenges. Solving them becomes the result of gathered information, research, and creativity.</p>

                        <p><span className={'icon'}><LiaToolboxSolid/></span> As a front-end developer, my toolkit includes HTML, SCSS, and ReactJS or jQuery, depending on the project's objectives. I prefer ReactJS for its proven track record and prominence in the ever-evolving front-end landscape. Collaborative tools like Slack for communication, Trello and Jira for task management, and Git and Bitbucket for code sharing and version control are integral to my workflow. These technologies enable efficient teamwork and streamline project development.</p>

                        <p><span className={'icon'}><IoSchoolOutline/></span> In this dynamic field, continuous learning is vital. I keep pace with the latest trends and technologies through various resources, ensuring that my skills remain cutting-edge. Looking ahead, my goal is to master the creation of websites and deliver up to date trendy, appealing, and practical websites and web applications.</p>

                        <p>In summary, my journey as a Front-End Developer and Web Designer is a blend of creativity, technical prowess, and a commitment to staying at the forefront of web development. I bring ideas to life through responsive design, embrace emerging technologies, and foster collaboration with a passion for creating exceptional digital experiences.</p>

                    </Col>
                    <Col className={'col-r'} md={3}>
                        <h2 className={'title-col-r'}>Skills, Stack &<br/> Technologies:</h2>
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
                        <div className={'decor'}>
                            <div className={'numb'}>15</div>
                            <div className={'txt'}>Years Of<br/> Experience</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default SectionsAboutMe;
