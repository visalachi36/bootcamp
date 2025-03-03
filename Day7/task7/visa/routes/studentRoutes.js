const express = require("express");
const { getAllStudents } = require("../controllers/studentController");

const router = express.Router();

// GET /students with pagination
router.get("/students", getAllStudents);

module.exports = router;
