require("dotenv").config(); // Load environment variables from .env file

// Import required modules
const nodemailer = require("nodemailer"); // Module to send emails

// Create a Nodemailer transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "Gmail", // Specify the email service provider (Gmail in this case)
  auth: {
    user: process.env.EMAIL_USER, // Your email address used for sending emails
    pass: process.env.EMAIL_PASS, // Use the App Password generated for your Gmail account
  },
});

// Define the handler for the Netlify function
exports.handler = async (event, context) => {
  // Check if the request method is POST
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // or your specific domain
        "Access-Control-Allow-Methods": "POST, OPTIONS", // Allow methods
        "Access-Control-Allow-Headers": "Content-Type", // Allow headers
      },
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  // Parse the request body
  const { name, email, message } = JSON.parse(event.body);

  // Prepare the email data
  const mailOptions = {
    from: `"${name}" <${email}>`, // Set the 'from' field to include the user's name and email
    to: "ayyubiy67@gmail.com", // Your email address where the message will be sent
    subject: `Contact Form Submission from ${name}`, // Subject line of the email
    text: message, // The message content
    replyTo: email, // Set the reply-to address to the user's email for easy replies
  };

  try {
    // Send the email using the transporter
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully"); // Log the success response
    return {
      statusCode: 200, // OK
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow requests from any origin (adjust for security)
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Message received successfully!" }),
    };
  } catch (error) {
    // Log the error and send a 500 response if sending fails
    console.error("Error sending email:", error);
    return {
      statusCode: 500, // Internal Server Error
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow requests from any origin (adjust for security)
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Failed to send message." }),
    };
  }
};
