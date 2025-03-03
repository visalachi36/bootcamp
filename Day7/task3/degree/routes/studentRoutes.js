const express = require('express');
const router = express.Router();
const { getAllStudents } = require('../controllers/studentController');  // Ensure correct path

router.get('/students', getAllStudents);

module.exports = router;
