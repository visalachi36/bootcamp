const express = require("express");
const router = express.Router();
const { deleteStudent } = require("../controllers/studentController");

router.delete("/:id", deleteStudent);  // ✅ Ensure this route exists

module.exports = router;
