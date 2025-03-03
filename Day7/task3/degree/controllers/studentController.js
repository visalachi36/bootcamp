// controllers/studentController.js
const Student = require('../models/Student');  // Ensure you have this model

// @desc Get all students
// @route GET /students
// @access Public
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getAllStudents };
