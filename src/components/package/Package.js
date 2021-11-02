import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar as fullStar
  } from "@fortawesome/free-solid-svg-icons";
import {faStar as emptyStar} from  "@fortawesome/free-regular-svg-icons";
import { NavLink } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
 

const Package = (props) => {
    const {key,img,title,desc,price,rating,ratingCount}=props.package;   
    
    const {addToCart}=useAuth();
    return (
        
           
            <Card className="m-2" style={{ width: '25rem' }}>
  <Card.Img className="rounded mx-auto d-block" style={{width:"250px", height:"250px"}} variant="top" src={img} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {desc}
    </Card.Text>
  </Card.Body>
   
  <Card.Body>
    <h4>Price: {price}$</h4>
  </Card.Body>
  <Card.Body>
    <Row>
        <Col>
        <Rating

        initialRating={rating}
        readonly
  emptySymbol={<FontAwesomeIcon className="text-warning" icon={emptyStar} />}

  fullSymbol={<FontAwesomeIcon className="text-warning" icon={fullStar} />}

/> <span>{rating}</span>
        
        </Col>
        <Col>
        Total review  {ratingCount}
        
        </Col>
    </Row>
  </Card.Body>
  <Card.Body className="d-grid gap-3" >
     <NavLink to={`/packages/${key}`}   className="btn btn-warning">View Details</NavLink>
     <button onClick={()=>addToCart(props.package)}  className="btn btn-warning ">Add to Cart</button>
  </Card.Body>
</Card>
        

       
       
    );
};

export default Package;