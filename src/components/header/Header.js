import React from 'react';
import {   Container,  Nav, Navbar } from 'react-bootstrap';
import logo from "../../assests/images/logo.jpg"
 
 
import {   NavLink } from 'react-router-dom';
 
import './Header.css';
// import { HashLink } from 'react-router-hash-link';
 
import Navdrop from './Navdrop/Navdrop';
 

const Header = () => {
  
   
 
    
    
    return (
        <div className="sticky-top">
            <Navbar  style={{ backgroundColor: 'rgb(255, 182, 0)'}} expand="lg">
  <Container>
    <Navbar.Brand  to="/home"> <img src={logo} alt="" /> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto align-items-center  ">
        <Nav.Link as={NavLink} to="/home" className="fw-bold mx-5">Package</Nav.Link>
        
      
       <Navdrop></Navdrop> 
      
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;