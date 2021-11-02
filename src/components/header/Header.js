import React from 'react';
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from "../../assests/images/logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import { HashLink } from 'react-router-hash-link';
 
const Header = () => {
  const {AllContexts,selectedPackage } = useAuth();
  const { user, logOut } = AllContexts;
 
    
    const { displayName, photoURL, email } = user;
    return (
        <div className="sticky-top">
            <Navbar  style={{ backgroundColor: 'rgb(255, 182, 0)'}} expand="lg">
  <Container>
    <Navbar.Brand  to="/home"> <img src={logo} alt="" /> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto align-items-center">
        <Nav.Link as={NavLink} to="/home" className="fw-bold">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/about" className="fw-bold">About</Nav.Link>
        <Nav.Link as={NavLink} to="/contact" className="fw-bold">Contact</Nav.Link>
        <Nav.Link as={NavLink} to="/packages" className="fw-bold">Package</Nav.Link>
        {/* <Nav.Link as={HashLink} to="/home#feature" className="fw-bold">Feature Packages</Nav.Link> */}
       
        <Nav.Link as={NavLink} to="/cart"><FontAwesomeIcon icon={faShoppingCart} />
        <Badge bg="secondary">{selectedPackage.length}</Badge>
        </Nav.Link>
        {!displayName ? (
                <>
                  <Nav.Link as={NavLink} to="/signup" className="fw-bold">
                    Sign Up
                  </Nav.Link>

                  <Nav.Link className="fw-bold" as={NavLink} to="/login">
                    Log in
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={
                    <img
                      style={{
                        width: "45px",
                        borderRadius: "50%",
                      }}
                      src={photoURL}
                      alt=""
                    />
                  }
                >
                  <div className="text-center">
                    <h6>{displayName}</h6>
                    <p className="m-0 mb-2">{email}</p>
                    <button onClick={logOut}  className="btn btn-primary">
                      Sign Out
                    </button>
                  </div>
                </NavDropdown>
              )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;