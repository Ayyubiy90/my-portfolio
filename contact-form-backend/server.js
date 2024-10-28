const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Here you can handle the data, e.g., save it to a database or send an email
  console.log("Received contact form submission:", { name, email, message });

  // Send a response back to the client
  res.status(200).json({ message: "Message received successfully!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
