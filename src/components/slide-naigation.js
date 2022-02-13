import React from "react";
import './slide-nav.scss';
import { Row, Col } from 'react-bootstrap';
import home from './accets/Vector.png';
import Herm from './accets/Vector (2).png';
import massege from './accets/Group (1).png';
import setting from './accets/Group.png';
import exit from './accets/ic_baseline-log-out.png';
import {
  Link
} from "react-router-dom";

const SideNavigation = () => {
  return (
    <>
      <sidenav className="sideNav">
        <Row className="justify-content-between align-items-start h-100">
          <Col md={12}>
            <Link to={"deshboard"} href="#">
              <div className="icon">
                <img src={Herm} className="img-fluid z-index" alt="" />
              </div>
            </Link>

            <ul>
              <li>
                <Link to={"/home"} href="#">
                  <img src={home} className="img-fluid z-index" alt="" />
                </Link>
              </li>
              <li>
                <Link to={"/massage"} href="#">
                  <img src={massege} className="img-fluid z-index" alt="" />
                </Link>
              </li>
              <li>
                <Link to={"/setting"} href="#">
                  <img src={setting} className="img-fluid z-index" alt="" />
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={12}>

            <Link to={"/exit"} href="#">
              <div className="icon">
                <img src={exit} className="img-fluid z-index" alt="" />
              </div>
            </Link>

          </Col>
        </Row>
      </sidenav>
    </>
  );
};

export default SideNavigation;