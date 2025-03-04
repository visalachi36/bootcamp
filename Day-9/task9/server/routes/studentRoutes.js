const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

// ✅ Fetch all students (GET /api/students)
router.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json({ students });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Create a new student (POST /api/students)
router.post("/students", async (req, res) => {
  try {
    const { name, studentId, email, major, year, imageUrl } = req.body;
    const newStudent = new Student({ name, studentId, email, major, year, imageUrl });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
