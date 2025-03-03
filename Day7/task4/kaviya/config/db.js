const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      throw new Error("❌ MONGO_URI is not defined in the .env file");
    }

    console.log("🔍 MONGO_URI:", mongoURI); // Debugging line

    await mongoose.connect(mongoURI); // ✅ No need for useNewUrlParser

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
