import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./desktopchat.scss"
import profile from "./accets/Ellipse 3.png";
import Boss from "./accets/boss.png";
import Boss2 from "./accets/Ellipse 14.png";
import dots from "./accets/dots.png";
import option from "./accets/option.png";
import close from "./accets/Vector (6).png";
import file from "./accets/Vector (4).png";
import send from "./accets/Vector (5).png";


const DesktopChat = () => {
    return (
        <>
            <div className='ChatBoard'>
                <Col md={12} className="d-flex align-items-center justify-content-between chat-head bg-blue px-4 py-2">
                    <div className='d-flex align-items-center'>
                        <div className='position-relative'>
                            <img src={profile} className="img-fluid me-4" alt="" />
                            <img src={dots} className="img-fluid online" alt="" />
                        </div>
                        <div className=''>
                            <h3 className='mb-1 text-white'>Esther Howard</h3>
                        </div>
                    </div>
                    <div>
                        <a href="#" className='me-5'>
                            <img src={option} className="img-fluid" alt="" />
                        </a>
                        <a href="#">
                            <img src={close} className="img-fluid" alt="" />
                        </a>
                    </div>
                </Col>
                <Col md={12} sm={12}>
                    <Row className='my-3'>
                        <Col md={12}>
                            <h4 className='text-center'>Today</h4>
                        </Col>
                    </Row>
                    <Row className='px-3 mb-3'>
                        <Col className='d-flex'>
                            <div>
                                <img src={Boss2} alt="" />
                            </div>
                            <div className='chat-box'>
                                <p className='chat-text'>Hii Prakash !
                                    Feels like it’s been a while! How are you? Do you
                                    have any time for the remainder of the week to
                                    help me with an ongoing  project?
                                </p>
                                <p className='text-end mb-0'>8:00 AM</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='px-3 mb-3'>
                        <Col className='d-flex justify-content-end'>
                            <div className='chat-box radius'>
                                <p className='chat-text'>Hii Easther, glad to hear from you, I’m fine, What
                                    about you? and how it’s going with the velocity
                                    website? off cours, I’ll help with this project</p>
                                <p className='text-end mb-0'>8:00 AM</p>
                            </div>
                            <div>
                                <img src={Boss} alt="" />
                            </div>
                        </Col>
                    </Row>
                    <Row className='px-3 mb-3'>
                        <Col className='d-flex'>
                            <div>
                                <img src={Boss2} alt="" />
                            </div>
                            <div className='chat-box'>
                                <p className='chat-text'>Super, I’ll get you the new brief for our own site
                                    over to you this evening, so you have time to
                                    read over I’m good thank you!
                                </p>
                                <p className='text-end mb-0'>8:00 AM</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='px-3 mb-3'>
                        <Col className='d-flex justify-content-end'>
                            <div className='chat-box radius'>
                                <p className='chat-text'>Of course I can, just catching up with steve on it
                                    and I’ll write out. Speak tomorrow! Let me know
                                    if you have any questions!</p>
                                <p className='text-end mb-0'>8:00 AM</p>
                            </div>
                            <div>
                                <img src={Boss} alt="" />
                            </div>
                        </Col>
                    </Row>

                    <Row  className='py-3 mb-3 align-items-center justify-content-between mx-auto'>
                        <Col md={10} className="ps-3 pe-0">
                        <div className="position-relative">
                            <input type="text" placeholder="Write a message" className="chat-form form-control" />
                            <a href="#">
                                <img src={file} className="img-fluid file-icon" alt="" />
                            </a>
                        </div>
                        </Col>
                        <Col md={2} classNametext-center>
                                <a href='#' className='send-btn mx-auto'>
                                    <img src={send} className="img-fluid" alt="" />
                                </a>
                        </Col>
                    </Row>
                </Col>
            </div>
        </>
    )
}

export default DesktopChat;