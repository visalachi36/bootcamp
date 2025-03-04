require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB (Fixed deprecated options)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// API Routes
app.use("/api", studentRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the Student Database API! 🎓");
});

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
