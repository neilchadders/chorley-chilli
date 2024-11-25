import React, { useState } from 'react';
import FormContainer from "../components/FormContainer";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState(""); // Correct state initialization
  
  const submitForgotEmail = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    console.log(email);
    const API_URL = process.env.REACT_APP_API_URL;

    try {
      // Make API call to send forgot password email
      await axios.post(`${API_URL}/api/send`, { email });
      toast.success("Email sent successfully");
    } catch (error) {
      // Handle errors based on server response
      if (error.response && error.response.status === 404) {
        toast.error("Email not found");
      } else {
        toast.error("Server error");
      }
    }
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
