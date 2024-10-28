const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer"); // Import Nodemailer

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail", // Use Gmail as the email service
  auth: {
    user: "ayyubiy67@gmail.com", // Your email address
    pass: "lvjv eeup gmso ewnx", // Your email password or app password
  },
});

// Endpoint to handle form submissions
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Prepare the email data
  const mailOptions = {
    from: email, // Sender's email
    to: "ayyubiy67@gmail.com", // Your email address
    subject: `Contact Form Submission from ${name}`,
    text: message,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Failed to send message." });
    }
    console.log("Email sent:", info.response);
    res.status(200).json({ message: "Message received successfully!" });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
