import { useState } from "react";
import axios from "axios";

export default function ContactScreen() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const API_URL = process.env.NODE_ENV;
        console.log("API URL:", process.env.REACT_APP_API_URL);
      await axios.post(`${API_URL}/api/send`, {
        to,
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
        placeholder="Recipient Email"
        value={to}
        onChange={(e) => setTo(e.target.value)}
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
