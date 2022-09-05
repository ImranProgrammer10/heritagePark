import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav, Dropdown, Badge } from 'react-bootstrap';
import useAuth from './../../../hooks/useAuth';
import { AiFillDelete } from 'react-icons/ai';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navdrop = () => {
    const {AllContexts,selectedPackage ,remove} = useAuth();
    return (
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <faShoppingCart color="white" fontSize="25px" />
              <Badge>{selectedPackage.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {selectedPackage.length > 0 ? (
                <>
                  {selectedPackage.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.img}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>$ {prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() => remove(prod.key)}
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
    );
};

export default Navdrop;