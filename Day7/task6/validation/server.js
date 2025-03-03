const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // Ensure this path is correct
const studentRoutes = require("./routes/studentRoutes");

dotenv.config();

const app = express();

// Connect to Database
connectDB();

app.use(express.json());
app.use("/api", studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
