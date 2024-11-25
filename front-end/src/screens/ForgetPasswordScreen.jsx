import React, { useState } from 'react';
import FormContainer from "../components/FormContainer";
import { Form, Button } from 'react-bootstrap';

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState(""); // Correct state initialization


  const API_URL = process.env.REACT_APP_API_URL
  
  const submitForgotEmail = (e) => {
   const API_URL = process.env.REACT_APP_API_URL;
    axios
    .post(`${API_URL}//forget-password`, email)
    .then((response) => {
      toast.success("Email sent successfully");
    })
    .catch((error) => {
      if (error.response.status === 404) {
        toast.error("Email not found");
      } else {
        toast.error("Server error");
      }
    });

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
}
export default ForgetPasswordScreen;
