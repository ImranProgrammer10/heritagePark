import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
 
import google from  "../assests/images/google.png";
 
import { NavLink, useLocation, useHistory } from "react-router-dom";
 
import useAuth from './../hooks/useAuth';
 
 
 const Login = () => {
    const {AllContexts}= useAuth();
    const history=useHistory();
    const location=useLocation();
    const redirect = location?.state?.from || '/home';
    
   
  const {
    signInWithEmail,
    signInWithGoogle,
     
    getPassword,
    getEmail,
    setError,
    setUser,
    error,
     
  } =AllContexts
  
   
 
  return (
    <div className="text-center my-4">
      <h2>Please Login</h2>
      <p className=" mt-2">Login with Email & Password</p>
      <p className="text-danger text-center">{error}</p>
      <div className="w-25 mx-auto">
        <Form onSubmit={signInWithEmail}>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Email Address
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                  onBlur={getEmail}
                  type="email"
                  autoComplete="current-email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="text-start">
              <Form.Label htmlFor="password" visuallyHidden>
                Your Password
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                  onClick={getPassword}
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Enter your password"
                />
              </InputGroup>
            </Col>
          </Row>

          <button type="submit" className="btn btn-primary mt-2 w-100">
            Login
          </button>
        </Form>
      </div>
      <p className="mt-2">
        <NavLink className="text-decoration-none" to="/signup">
          Need an Account? Please Sign up!
        </NavLink>
      </p>
      <p className="mt-3">Or</p>
      <p> Login with</p>
      <div>
        <button
          onClick={() => {
            signInWithGoogle()
              .then((result) => {
               
                setUser(result.user);
                history.push(redirect);
              })
              .catch((err) => {
                const errorMessage = err.message;
                setError(errorMessage);
              });
          }}
          className="btn"
        >
          <img src={google} width="46px" alt="google-icon" />
        </button>
        
         
      </div>
    </div>
  );
};

export default Login;