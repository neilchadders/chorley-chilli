import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import FormContainer from "../components/FormContainer";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const { data } = await axios.post(`/api/forget-password/${token}`, {
        password,
      });
      setMessage(data.message);
      toast.success(data.message);
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      setMessage(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <FormContainer>
      <h1>Reset Password</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="password">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="my-2" controlId="confirmPassword">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Reset Password
        </Button>
      </Form>

      {message && (
        <Row className="py-3">
          <Col>
            <p className={message.includes("success") ? "text-success" : "text-danger"}>
              {message}
            </p>
          </Col>
        </Row>
      )}
    </FormContainer>
  );
};

export default ResetPassword;
