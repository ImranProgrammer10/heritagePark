import React from "react";
import  "./footer.css";
// import payment from "./../../assets/images/payment.png";
// import footerLogo from "./../../assets/images/footer-logo.png";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-black text-center  ">
      <div className="py-4 gradient">
        <Container>
          <Row>
            <Col md={5}>
              <div className="text-center my-2">
                {/* <img width="120px" src={footerLogo} alt="" /> */}
              </div>

              <ul className="list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span className="ms-1 fs-5">New York</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="ms-1 fs-5">
                    Official: mollah.programmer@gmail.com
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="ms-1 fs-5">
                    Helpline: +16505130514 (Available:10:00AM to 10.00PM)
                  </span>
                </li>
              </ul>
            </Col>
           
            <Col md={3}>
              <ul className="list-unstyled footer-link">
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
                <li>
                  <NavLink to="/courses">Courses</NavLink>
                </li>
                <li>
                  <NavLink to="/policy">Policy</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <div className="text-center my-2">
                {/* <img width="120px" src={footerLogo} alt="" /> */}
              </div>

              <ul className="list-unstyled">
                <h1>Hours</h1>
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span className="ms-1 fs-5">Friday-Saturday
                  <br />
                  (9:30 am - 7:00 pm)
                  
                  </span>
                  <br />
                  <br />
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="ms-1 fs-5">
                    Monday-Thursday
                    <br />
                    (10:00 am - 7:00 pm)
                  </span>
                </li>
                <li>
                  
                  <span className="ms-1 fs-5">
                    
                  </span>
                </li>
              </ul>
            </Col>
            
          </Row>
        </Container>
      </div>
      <p className="text-center m-0 py-3 copyright ">
      Copyright 2021 Heritage Park Ltd.
      </p>
     
     
    </div>
  );
};

export default Footer;