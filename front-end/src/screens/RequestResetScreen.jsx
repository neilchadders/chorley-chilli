import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import './password.css';


const RequestReset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/forget-password", { email });
      setMessage(data.message);
      toast.success(data.message);
      setEmail("");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      setMessage(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div className="password-reset">
    <h1 className = "password-header">Request Password Reset</h1>
    <div className="body-form">
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Request Password Reset
        </Button>
      </Form>

      {message && (
        <Row className="py-3">
          <Col>
            <p className="text-success">{message}</p>
          </Col>
        </Row>
      )}
    </div>
    </div>
  );
};

export default RequestReset;
