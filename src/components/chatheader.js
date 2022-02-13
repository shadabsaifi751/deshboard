import React from 'react';
import { Row, Col,Container } from 'react-bootstrap';
import './chat-header.scss';
import setting from './accets/Layer 2.png';
import notification from './accets/clarity_bell-outline-badged.png';
import boss from './accets/boss.png';
import { Dropdown } from 'react-bootstrap'


const HeaderChat = () => {
    return (
        <>
            <section className='py-3 sticky-top bg-white'>
                <Container >
                <Row className='align-items-center justify-content-between'>
                    
                    <Col md={5} sm={6} className="d-flex align-items-center justify-content-between ms-0 ms-md-3">
                        <h3>Chat</h3>
                        <div className="head-icon">
                            <a href="#"><img src={setting} className="img-fluid p-2 rounded-3 bg-light" alt="" /></a>
                            <span className='font'>Sort</span>
                        </div>
                    </Col>
                    <Col md={5} sm={6} className="d-flex align-items-center justify-content-end">
                        <div className="me-md-5 me-3">
                           <a href="#">
                           <img src={notification} className="img-fluid" alt="" />
                           </a>
                        </div>
                        <img src={boss} className="img-fluid" alt="" />
                        <Dropdown className="d-inline mx-2" autoClose="inside">
                            <Dropdown.Toggle id="dropdown-autoclose-inside" className='bg-transparent font text-dark border-0'>
                            Prakash
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='py-0'>
                                <Dropdown.Item href="#" className='py-2'>Profile</Dropdown.Item>
                                <Dropdown.Item href="#" className='py-2'>Setting</Dropdown.Item>
                                <Dropdown.Item href="#" className='py-2'>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                </Container>
            </section>
        </>
    )
}

export default HeaderChat;
