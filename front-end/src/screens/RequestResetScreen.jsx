import React, { useState } from "react";
import axios from "axios";

const RequestReset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/forget-password", { email });
      setMessage(data.message);
    } catch (error) {
      setMessage(error.response.data.message || "Error occurred");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Request Password Reset</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default RequestReset;
