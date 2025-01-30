const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB(); // Connect to MongoDB
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

const User = require("./models/User");

app.get("/adduser", async (req, res) => {
    const user = new User({ username: "JohnDoe", email: "john@example.com", password: "password123" });
    await user.save();
    res.send("User added!");
});
