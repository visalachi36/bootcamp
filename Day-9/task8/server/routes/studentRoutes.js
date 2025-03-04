const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

// Create a new student
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

// Get students with pagination
router.get("/students", async (req, res) => {
  try {
    let { page, limit } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 5;

    const totalStudents = await Student.countDocuments();
    const students = await Student.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      students,
      totalPages: Math.ceil(totalStudents / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
