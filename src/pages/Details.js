import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar as fullStar
  } from "@fortawesome/free-solid-svg-icons";
import {faStar as emptyStar} from  "@fortawesome/free-regular-svg-icons";
import Rating from 'react-rating';

const Details = () => {

    
    const {key}=useParams();
    const {packages,addToCart}=useAuth();
    const matchingPackage=packages.find((packages)=>packages.key===Number(key));
//    const {img,title,rating,ratingCount,sellerThumb,provider,price}=matchingPackage;

    return (
        <div className='m-5'> 
            {matchingPackage?.title ? (
                    <Container>
                        <Row className="d-flex justify-content-center">
                            <Col md={6}>
                            <img className="img-fluid" src={matchingPackage.img}alt="" />
                            </Col>
                            <Col md={6}>
                                <h2>{matchingPackage.title}</h2>
                                <Row>
                                    <Col>
                                    <h2>price: {matchingPackage.price}$</h2>

                                    <div className="my-3">
        <Rating

        initialRating={matchingPackage.rating}
        readonly
  emptySymbol={<FontAwesomeIcon className="text-warning" icon={emptyStar} />}

  fullSymbol={<FontAwesomeIcon className="text-warning" icon={fullStar} />}

/> 
<span>{matchingPackage.rating}</span>
<p className="mb-0">Total Review {matchingPackage.ratingCount}</p>
<button onClick={()=>addToCart(matchingPackage)}  className="btn btn-warning ">Add to Cart</button>
        
        </div>


                                    </Col>
                                    <Col>
                                    
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Container>
                ) : <h1>No Package Found</h1>
            }
            
        </div>
    );
};

export default Details;