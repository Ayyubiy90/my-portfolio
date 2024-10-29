// Import required modules
const express = require("express"); // Web framework for Node.js
const bodyParser = require("body-parser"); // Middleware to parse incoming request bodies
const cors = require("cors"); // Middleware to enable Cross-Origin Resource Sharing
const nodemailer = require("nodemailer"); // Module to send emails

// Create an instance of an Express application
const app = express();
const PORT = process.env.PORT || 5000; // Set the port to the environment variable or default to 5000

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

// Create a Nodemailer transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "Gmail", // Specify the email service provider (Gmail in this case)
  auth: {
    user: "process.env.EMAIL_USER", // Your email address used for sending emails
    pass: "process.env.EMAIL_PASS", // Use the App Password generated for your Gmail account
  },
});

// Define an endpoint to handle form submissions
app.post("/api/contact", (req, res) => {
  // Destructure the request body to get name, email, and message
  const { name, email, message } = req.body;

  // Prepare the email data
  const mailOptions = {
    from: `"${name}" <${email}>`, // Set the 'from' field to include the user's name and email
    to: "ayyubiy67@gmail.com", // Your email address where the message will be sent
    subject: `Contact Form Submission from ${name}`, // Subject line of the email
    text: message, // The message content
    replyTo: email, // Set the reply-to address to the user's email for easy replies
  };

  // Send the email using the transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // Log the error and send a 500 response if sending fails
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Failed to send message." });
    }
    // Log the success response and send a 200 response if sending succeeds
    console.log("Email sent:", info.response);
    res.status(200).json({ message: "Message received successfully!" });
  });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Log the server URL
});
