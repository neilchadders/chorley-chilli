import { useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";

import { toast } from "react-toastify";

import "./screen.background.css";
import "./contactScreen.css";

const ContactScreen = () => {
  const [senderEmail, setSenderEmail] = useState("");
  const [senderName, setSenderName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const to = "neilchadders1983@gmail.com"; // Replace with desired recipient email

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_URL = process.env.REACT_APP_API_URL; // Use environment variable or local URL for development
      await axios.post(`${API_URL}/api/send`, {
        to,
        senderEmail,
        senderName,
        subject,
        message,
      });
      toast.success("Email sent successfully!");
      setSenderEmail("");
      setSenderName("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error("Error sending email:", err);
      toast.error("Failed to send email. Please try again later.");
    }
  };

  return (
    <div id ="contact-container">
      
    <div className="contact-header-background">
          <h1 id = "contact-header">Contact Us</h1>
      </div>

     
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-2 form-body" controlId="senderEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="my-2 form-body" controlId="senderName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="my-2 form-body" controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="my-2 form-body" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        

        <Button type="submit" variant="primary" className = "submit">
          Send Email
        </Button>
        </Form.Group>
      </Form>
      <Row className="py-3 form-body">
        <Col>
          Need help? Check our <a href="/faq">FAQ</a>.
        </Col>
      </Row>
   
    </div>
  );
};

export default ContactScreen;
