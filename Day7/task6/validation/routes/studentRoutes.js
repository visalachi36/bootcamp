const express = require("express");
const router = express.Router();
const { getStudents } = require("../controllers/studentController"); // Ensure this path is correct

router.get("/students", getStudents);

module.exports = router;
