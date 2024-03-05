import React from "react";
import HeaderDynamic from "../../components/HeaderDynamic";
import Footer from "../../components/Footer";
import {Accordion} from "react-bootstrap";

import ilia from '../../assets/img/me-services-medium.png';
import bgMain from '../../assets/img/bg2.jpg';
import pImg1 from '../../assets/img/service-one-page.png';
import pImg2 from '../../assets/img/service-custom-website.png';
import pImg3 from '../../assets/img/cms.png';
import pImg4 from '../../assets/img/pngaaa.com-1728025.png';


import ServicePackSection from '../../components/ServicePackSection';

import SvgTop from '../../assets/svgs/elem-bottom-gray.svg';

import './styles.scss';
import ScrollAnimation from "react-animate-on-scroll";


const ServicesPage: React.FC = () => {
    return (
        <div className={'services-page'}>
            <HeaderDynamic
                title={'Tailored Web Solutions'}
                text={`Welcome to my Freelance Web Development and Design Services. I bring expertise in creating tailored website solutions for businesses of all sizes. Let's collaborate to enhance your online presence.`}
                imgIs={ilia}
                bgMain={bgMain}
                imgWidth={400}
            />

            <ScrollAnimation animateIn='fadeIn' delay={200}>
                <ServicePackSection
                    title={'One-Page Website'}
                    text={'A one-page website, also known as a single-page website, is a type of website design that presents all its content on a single, long-scrolling web page. Unlike traditional multi-page websites, where each page is dedicated to specific content or functions (such as a homepage, about page, contact page, etc.), a one-page website condenses all of its information into a single continuous page.'}
                    price={'850'}
                    pImg={pImg1}
                >
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>One-page websites are commonly used for:</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><strong>Single-Product or Service Promotion:</strong> They are effective for showcasing a single product, service, or event.</li>
                                    <li><strong>Personal Resumes:</strong> Job seekers or freelancers may use one-page websites as online resumes.</li>
                                    <li><strong>Event Promotion:</strong> Websites for conferences, weddings, or other events.</li>
                                    <li><strong>Landing Pages:</strong> One-page websites can serve as landing pages for marketing campaigns.</li>
                                    <li><strong>Small Businesses:</strong> Some small businesses or startups use them for a simple online presence.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What’s included in One-Page Website package:</Accordion.Header>
                            <Accordion.Body>
                                Information is coming soon...
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </ServicePackSection>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' delay={300}>
                <img src={SvgTop} alt="" style={{transform: 'rotate(180deg)', width: 'calc(100% + 1.3px)', position: 'relative', filter: 'invert(1.5) sepia(1) saturate(5) hue-rotate(-179deg)', marginBottom: '-1px'}}/>
                <ServicePackSection bgColor={'rgb(245 244 255)'} flipSide={true}
                    title={'Custom Website'}
                    text={'A custom website, often referred to as a custom-built website or bespoke website, is a website that is uniquely designed and developed to meet the specific needs and requirements of a particular individual, business, or organization. Unlike template-based websites, which use pre-designed layouts and structures that can be easily customized, custom websites are built from the ground up, tailored to the client\'s exact specifications.'}
                    pImg={pImg2}
                    price={'2400'}
                >

                    <Accordion defaultActiveKey="2">
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                Here are some key characteristics of custom websites:
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><strong>Unique Design:</strong> Custom websites are created with a unique and original design that reflects the client's brand identity, goals, and preferences. Graphic designers often work on the visual elements to ensure a distinctive look.</li>
                                    <li><strong>Tailored Functionality:</strong> The functionality and features of a custom website are customized to meet the specific requirements of the client. This can include custom forms, databases, e-commerce systems, and more.</li>
                                    <li><strong>Scalability:</strong> Custom websites are scalable and can be expanded or modified as the client's needs evolve. This flexibility is crucial for businesses and organizations that anticipate growth.</li>
                                    <li><strong>Optimized Performance:</strong> Developers can optimize the code and performance of a custom website to ensure fast loading times, efficient operation, and compatibility with various devices and browsers.</li>
                                    <li><strong>Search Engine Optimization (SEO):</strong> Custom websites can be built with SEO best practices in mind, making them more likely to rank well in search engine results pages.</li>
                                    <li><strong>Security:</strong> Security measures can be customized to protect against specific threats and vulnerabilities, making custom websites less susceptible to hacking or data breaches.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What’s included in One-Page Website package:</Accordion.Header>
                            <Accordion.Body>
                                Information is coming soon...
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br/>
                    <br/>
                </ServicePackSection>
                <img src={SvgTop} alt="" style={{ width: 'calc(100% + 1.3px)', position: 'relative', filter: 'invert(1.5) sepia(1) saturate(5) hue-rotate(-179deg)', marginBottom: '-1px'}}/>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' delay={300}>
                <ServicePackSection
                    title={'CMS Website'}
                    text={'A Content Management System (CMS) website is a type of website that is built and managed using a content management system, which is a software application designed to simplify the creation, editing, organization, and publication of digital content. CMS websites are popular because they allow individuals, businesses, and organizations to easily create and update web content without requiring advanced technical skills or coding knowledge.'}
                    pImg={pImg3}
                    price={'3790'}
                >

                    <Accordion defaultActiveKey="4">
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                Here are some key characteristics and features of CMS websites:
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><strong>User-Friendly Interface:</strong> CMS platforms provide an intuitive, user-friendly interface that allows users to manage web content through a web browser. Users can create, edit, and delete pages, articles, images, and other types of content with ease.</li>
                                    <li><strong>Separation of Content and Design:</strong> CMS websites typically separate content from design. This means that website owners can update content without affecting the overall design and layout of the site.</li>
                                    <li><strong>Templates and Themes:</strong> CMS platforms often offer a wide range of templates or themes that users can choose from to define the look and feel of their websites. These templates can be customized to match the brand or style of the website.</li>
                                    <li><strong>Scalability:</strong> CMS websites are scalable, allowing for the addition of new pages, features, and functionality as a website's needs grow. This is especially useful for businesses and organizations that plan to expand their online presence.</li>
                                    <li><strong>Multiple Users and Roles:</strong> CMS platforms support multiple user accounts with different levels of access and permissions. Website owners can grant specific roles to users, such as editors, authors, and administrators, to control who can create and edit content.</li>
                                    <li><strong>Content Versioning:</strong> Many CMS systems offer content versioning, allowing users to view and restore previous versions of content. This is valuable for tracking changes and reverting to earlier versions if needed.</li>
                                    <li><strong>Media Management:</strong> CMS platforms include tools for managing and organizing multimedia content, such as images, videos, and documents.</li>
                                    <li><strong>SEO-Friendly:</strong> Most CMS systems provide features and plugins to optimize websites for search engines, making it easier to improve search engine rankings.</li>
                                    <li><strong>Community and Support:</strong> CMS platforms often have active communities of developers and users who contribute plugins, extensions, and provide support through forums and documentation.</li>
                                </ul>
                                <br/>
                                <p>Common CMS platforms include WordPress, Joomla, Drupal, and many others, each with its strengths and use cases. The choice of a CMS depends on factors like the website's purpose, technical requirements, scalability needs, and the user's familiarity with the platform. CMS websites are widely used for blogs, e-commerce sites, corporate websites, news portals, and more.</p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5">
                            <Accordion.Header>What’s included in One-Page Website package:</Accordion.Header>
                            <Accordion.Body>
                                Information is coming soon...
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </ServicePackSection>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' delay={300}>
                <img src={SvgTop} alt="" style={{transform: 'rotate(180deg)', width: 'calc(100% + 1.3px)', position: 'relative', filter: 'invert(1.5) sepia(1) saturate(5) hue-rotate(-179deg)', marginBottom: '-1px'}}/>
                <ServicePackSection bgColor={'rgb(245 244 255)'} flipSide={true}
                    title={'Logo development'}
                    text={'Logo development, also known as logo design or logo creation, is the process of conceptualizing, designing, and creating a visual symbol or mark that represents a brand, company, organization, product, or individual. Logos are a fundamental element of branding and play a crucial role in conveying the identity, values, and personality of the entity they represent. Here are the key steps involved in logo development.'}
                    pImg={pImg4}
                    price={'450'}
                >

                    <Accordion defaultActiveKey="6">
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>
                                Here are some key characteristics of custom logo designing process:
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <p><strong>Understanding the Brand:</strong> The logo development process begins with a thorough understanding of the brand's identity, target audience, values, and goals. Designers need to grasp the essence of what the logo should communicate.</p>
                                    <p><strong>Research:</strong> Designers conduct research to gain insights into the industry, competitors, and current design trends. This research helps in creating a unique and effective logo.</p>
                                    <p><strong>Conceptualization:</strong> Based on the brand's identity and research findings, designers brainstorm ideas and concepts for the logo. This stage involves sketching and creating rough drafts to explore various design directions.</p>
                                    <p><strong>Sketching and Drafting:</strong> Designers create hand-drawn sketches or initial digital drafts to visualize the logo concepts. These sketches serve as the foundation for the logo's development.</p>
                                    <p><strong>Digital Rendering:</strong> Using graphic design software, designers convert the chosen sketch or draft into a digital format. This stage allows for precise detailing, color exploration, and scalability.</p>
                                    <p><strong>Color Selection:</strong> Colors are a critical element of logo design. Designers choose colors that align with the brand's personality and evoke the desired emotions or associations.</p>
                                    <p><strong>Typography:</strong> If the logo includes text, designers carefully select and customize typography (fonts) to complement the logo's visual elements and overall design.</p>
                                    <p><strong>Simplicity and Versatility:</strong> Effective logos are often simple, memorable, and versatile. They should work well in various sizes and applications, from business cards to billboards.</p>
                                    <p><strong>Feedback and Revisions:</strong> Designers collaborate with clients and stakeholders to gather feedback on the logo concepts. Revisions are made based on this feedback to refine the design.</p>
                                    <p><strong>Finalization:</strong> Once the logo design is approved, designers finalize the artwork, ensuring that it meets industry standards for print and digital use.</p>
                                    <p><strong>Delivery:</strong> The final logo files, in various formats (e.g., vector formats like SVG, PNG, or JPEG), are delivered to the client or organization for use in branding materials, websites, marketing collateral, and more.</p>
                                    <p><strong>Brand Guidelines:</strong> Designers may also create brand guidelines that outline rules for logo usage, including size, spacing, color variations, and clear instructions to maintain consistency in branding.</p>
                                </ul>
                                <br/>
                                <p>Logo development is a creative and iterative process that aims to create a visual representation that leaves a lasting impression and helps the audience recognize and connect with the brand. A well-designed logo can become a powerful asset for building brand recognition and trust.</p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="7">
                            <Accordion.Header>What’s included in One-Page Website package:</Accordion.Header>
                            <Accordion.Body>
                                Information is coming soon...
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <br/>
                    <br/>
                    <br/>
                </ServicePackSection>
            </ScrollAnimation>
            <Footer/>
        </div>
    )
};

export default ServicesPage;
