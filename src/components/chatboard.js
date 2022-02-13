import React from 'react';
import { Col } from 'react-bootstrap';
import Data from "../data";
import "./chatboard.scss"




const ChatBoard = () => {
    return (
        <>  
            <div className='profile mt-5'>
                       {
                           Data.map(item => (
                            <a href="#" className='text-decoration-none'>
                                <Col sm={12} className="d-flex align-items-center justify-content-between border-bottom border-1 px-4 py-2">
                               
                               <div className='d-flex align-items-center'>
                                   <div className='position-relative'>
                                   <img src={item.image} className="img-fluid me-4" alt="" />
                                   <img src={item.dots} className="img-fluid online" alt="" />
                                   </div>
                                   <div className=''>
                                       <h5 className='mb-1'>{item.name}</h5>
                                       <p className='mb-0'>{item.discription}</p>
                                       <p className='mb-0 text-dark fw-bold'>{item.massege}</p>
                                   </div>
                               </div>
                               <div>
                                   <p className='small mb-2'>{item.time}</p>
                                   <div className='text-center'>
                                       <span className='badge'>{item.badge}</span>
                                   </div>
                               </div>
                           </Col>
                            </a>
                           ))
                       }
                        </div>
        </>
    )
}

export default ChatBoard;