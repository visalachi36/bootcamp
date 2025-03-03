const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api", studentRoutes);

const PORT = process.env.PORT || 5000;
connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
