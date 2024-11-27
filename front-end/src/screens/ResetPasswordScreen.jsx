import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import FormContainer from "../components/FormContainer";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match. Please request another reset link.");
      navigate("/forget-password");
      return;
    }

    try {
      const { data } = await axios.post(`/api/forget-password/${token}`, {
        password,
      });
      toast.success(data.message || "Password reset successful");
      navigate("/login");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please request another password link.";
      toast.error(errorMessage);
      navigate("/forget-password");
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
    </FormContainer>
  );
};

export default ResetPassword;
