import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './checkoutSteps.css';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div id = 'checkout-steps'>
    <Nav className='justify-content-center mb-4 checkout-steps'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link className = "checkout-steps">Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link className = "checkout-steps">Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link className = "checkout-steps">Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link className = "checkout-steps">Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link className = "checkout-steps" disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
    </div>
  );
};

export default CheckoutSteps;