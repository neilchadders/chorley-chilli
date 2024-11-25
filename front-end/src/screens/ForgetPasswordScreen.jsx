import React, { useState } from 'react';
import FormContainer from "../components/FormContainer";
import { Form, Button } from 'react-bootstrap';

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState(""); // Correct state initialization

  const submitForgotEmail = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <h1>Forget Password</h1>
      <FormContainer>
        <Form onSubmit={submitForgotEmail}>
          <Form.Group className='my-2' controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state correctly
            ></Form.Control>
          </Form.Group>
          <Button type='submit' variant='primary'>
            Reset Password
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default ForgetPasswordScreen;
