const express = require('express');
const connectDB = require('./config/db'); 
const studentRoutes = require('./routes/studentRoutes'); // ✅ Ensure this path is correct

require('dotenv').config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// ✅ Ensure the `/api` route prefix is correct
app.use('/api', studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
