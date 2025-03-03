const express = require('express');
const router = express.Router();
const Student = require('../models/student'); // lowercase 'student'

// @desc    Get all students
// @route   GET /students
// @access  Public
router.get('/', async (req, res) => {
    try {
        const students = await Student.find(); // Retrieve all student documents
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

module.exports = router;
