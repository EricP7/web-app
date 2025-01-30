const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// Middleware
app.use(express.json()); // Allow JSON data
app.use(cors()); // Allow frontend requests

// Default route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Start the server
const PORT = process.env.PORT || 5010;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
