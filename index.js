const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json()); // To parse JSON request bodies

// Sample Route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
