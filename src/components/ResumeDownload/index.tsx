import React, {FormEvent, useState} from "react";
import './styles.scss';

import {Container, Row, Col} from 'react-bootstrap';
import {HiOutlineDocumentText} from 'react-icons/hi';
import SectionTitle from "../SectionTitle";
import ScrollAnimation from "react-animate-on-scroll";
import {NavLink} from 'react-router-dom';

import emailjs from "emailjs-com";
import swal from "sweetalert";

const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

type ErrorsTypes = {
    username?: string,
    reason?: string,
    email?: string
}

const ResumeDownload: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState<ErrorsTypes>({});
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");

    const [activateLink, setActivateLink] = useState(false);

    const resetForm = () => {
        setUsername('');
        setReason('');
        setEmail('');
        const form = document.getElementById('form-resume')! as HTMLFormElement | null;
        form && form.reset();
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const errors: ErrorsTypes = {};

        if (!username) {
            errors.username = "Please enter your name"
        } else {
            delete errors.username ;
        }

        if (!reason) {
            errors.reason = "Please choose who you are"
        } else {
            delete errors.reason ;
        }

        if (!isValidEmail(email)) {
            errors.email = 'Please enter a valid email address'
        } else {
            delete errors.email ;
        }

        if (Object.keys(errors).length > 0) {
            setErrorMessage(errors);
            console.log(errors);
        } else {
            console.log(2);
            const templateParams = {
                title: `IliaSvinin.com - Resume downloaded by ${username}`,
                reply_to: email,
                from_name: username,
                my_html: `
                <b>Name:</b> ${username} <br/>               
                <b>Email:</b> ${email} <br/>
                <b>Reason:</b> ${reason} <br/>
            `
            };


            emailjs.send(
                process.env.REACT_APP_SERVICE_ID!,
                process.env.REACT_APP_TEMPLATE_ID!,
                templateParams,
                process.env.REACT_APP_USER_ID!
            ).then((result) => {
                swal("Thank you!", "Download is ready.", "success");
                resetForm();
                setActivateLink(true);
            }, (error) => {
                swal("Error!", "Something is wrong.", "error")
                console.log(error);
            })
        }



    };
    return (
        <div className={'resume-download'}>
            <Container>
                <ScrollAnimation animateIn='fadeIn' delay={200}>
                    <SectionTitle text={'Download My Resume/CV'} color ={""} />
                    <br/>
                    {activateLink ? (
                        <NavLink className={'link-btn'} to="/ilia-svinin-resume-2023.pdf" target={'_blank'} rel="noreferrer">Open PDF</NavLink>
                    ) : (
                        <>
                            <p className={'show-sm'}>
                                <strong>Your privacy matters to me!</strong> I kindly request a few details to help me tailor my services better and provide you with valuable content.
                                Rest assured, your information will be kept confidential and used solely for improving your experience with me.
                            </p>
                            <form id={'form-resume'} onSubmit={handleSubmit}>
                                <Row>
                                    <Col className={'col-l'} sm={12} md={6}>
                                        <Row>
                                            <Col sm={12} md={6}>
                                                <input type="text" placeholder={'Your name:'} onChange={e => setUsername(e.target.value)}/>
                                                {errorMessage.username && <div className={'error-msg'} data-target={'username'}>{errorMessage.username}</div>}
                                            </Col>
                                            <Col sm={12} md={6}>
                                                <input type="text" title={'email'} placeholder={'Your email: '} onChange={e => setEmail(e.target.value)}/>
                                                {errorMessage.email && <div className={'error-msg'} data-target={'email'}>{errorMessage.email}</div>}
                                            </Col>
                                            <Col md={12}>
                                                <select name="" id="" onChange={e => setReason(e.target.value)}>
                                                    <option value="">-- Who are you? --</option>
                                                    <option value="I'm recruiter">I'm recruiter</option>
                                                    <option value="I'm employer">I'm employer</option>
                                                    <option value="I'm potential customer">I'm potential customer</option>
                                                    <option value="I'm just looking for resume inspiration">I'm just looking for resume inspiration</option>
                                                </select>
                                                {errorMessage.reason && <div className={'error-msg'} data-target={'reason'}>{errorMessage.reason}</div>}
                                            </Col>
                                        </Row>
                                        <br/>
                                    </Col>
                                    <Col className={'col-r'} sm={12} md={6}>
                                        <p className={'show-md'}>
                                            <strong>Your privacy matters to me!</strong> I kindly request a few details to help me tailor my services better and provide you with valuable content.
                                            Rest assured, your information will be kept confidential and used solely for improving your experience with me.
                                        </p>
                                        <button type={'submit'}>Process to download <HiOutlineDocumentText style={{marginTop: '-5px'}}/></button>
                                    </Col>
                                </Row>
                            </form>
                        </>
                    )}


                </ScrollAnimation>
            </Container>
        </div>
    )
};

export default ResumeDownload;
