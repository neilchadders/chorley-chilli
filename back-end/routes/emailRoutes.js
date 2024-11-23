import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/send - Send an email
router.post("/", async (req, res) => {
  const { to, senderEmail, senderName, subject, message } = req.body;

  const mailOptions = {
    from: `${senderName} <${senderEmail}>`,
    to,
    subject,
    text: message,
    html: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
