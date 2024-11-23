import { useState } from "react";
import axios from "axios";

export default function ContactScreen() {
  const to = "neilchadders1983@gmail.com";

  const [senderEmail, setSenderEmail] = useState("");
  const [senderName, setSenderName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
          //const API_URL = process.env.REACT_APP_API_URL; // if in development change to local host 5000
       
      const API_URL = "http://localhost:5000"; // Change to deployed API URL for production
      await axios.post(`${API_URL}/api/send`, {
        to,
        senderEmail,
        senderName,
        subject,
        message,
      });
      alert("Email sent!");
    } catch (err) {
      console.error("Error sending email:", err);
      alert("Failed to send email");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Your Email"
        value={senderEmail}
        onChange={(e) => setSenderEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Your Name"
        value={senderName}
        onChange={(e) => setSenderName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <textarea
        rows="3"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button type="submit">Send Email</button>
    </form>
  );
}
