import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
 
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
 
import useAuth from './../hooks/useAuth';

const Cart = () => {
  const { selectedPackage, remove, setSelectedPackage } = useAuth();
  const navigate = useNavigate();

  const totalPrice = selectedPackage.reduce(
    (total, packages) => total + packages.price,
    0
  );
   
  return (
    <div className="my-4">
      <Container>
        {selectedPackage.length ? (
          <Row>
            <Col  sm={12} md={8}>
              {selectedPackage.map((course) => {
                const { img, key, title, desc, rating, ratingCount, price } =
                  course;

                return (
                  <Row className="my-2 bg-info" key={key}>
                    <Col sm={5}>
                      <img className="img-fluid" src={img} alt="" />
                    </Col>
                    <Col  className="mt-5" sm={7}>
                      <h5>{title}</h5>
                      <p className="mb-0">{desc}</p>
                      <h4>Price: {price}</h4>
                      <Row>
                        <Col sm={4}>
                          <Col>
                            <Rating
                              initialRating={rating}
                              readonly
                              emptySymbol={
                                <FontAwesomeIcon
                                  className="text-warning"
                                  icon={emptyStar}
                                />
                              }
                              fullSymbol={
                                <FontAwesomeIcon
                                  className="text-warning"
                                  icon={fullStar}
                                />
                              }
                            />
                            <span>{rating}</span>
                          </Col>
                          <Col>Total review {ratingCount}</Col>
                        </Col>
                        <Col sm={8}>
                          <div className="d-flex">
                            <NavLink
                              to={`/packages/${key}`}  
                              className="btn btn-warnng w-100 me-1"
                            >
                              View Details
                            </NavLink>

                            <button
                              onClick={() => remove(key)}
                              className="btn btn-warning  w-100"
                            >
                              Remove
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                );
              })}
            </Col>
            <Col className="text-center" md={4}>
              <h4>Total {selectedPackage.length} course selected</h4>
              <h6>Total Price: {totalPrice.toFixed(2)} $</h6>

              <button
                onClick={() => {
                  alert("This for purchasing");
                  localStorage.setItem("cart", JSON.stringify([])); 
                  setSelectedPackage([]);
                  navigate("/home");
                }}
                className="btn btn-warning"
              >
                Check Out
              </button>
            </Col>
          </Row>
        ) : (
          <div className="text-center my-5 py-5">
            <h1>No package Selected!</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;