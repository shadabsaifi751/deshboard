import React from "react";
import ChatHeader from "../components/chatheader";
import ChatBoard from "../components/chatboard";
import DesktopChat from "../components/desktopachat";
import search from "../components/accets/Vector (3).png"
import { Row, Col, Container } from 'react-bootstrap';
import "./chat.scss";


const Chat = () => {
    return (
        <>
            <ChatHeader />
            <Container>
                <Row className="mt-5 ms-2">
                    <Col className="" md={5} sm={12}>

                        <div className="position-relative">
                            <input type="text" placeholder="Search" className="form-control-style form-control" />
                            <img src={search} className="img-fluid search-icon" alt="" />
                        </div>
                        <ChatBoard/>
                        
                    </Col>
                    <Col md={12} lg={7}  sm={12}>
                        <DesktopChat/>
                    </Col>
                    
                </Row>

            </Container>
            

        </>
    )
}


export default Chat;