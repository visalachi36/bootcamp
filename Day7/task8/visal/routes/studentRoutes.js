const express = require("express");
const router = express.Router();
const {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
    searchStudent  // ✅ Import the search function
} = require("../controllers/studentController");

// ✅ Add search route before "/:id" to prevent conflicts
router.get("/search", searchStudent);  

// Other routes
router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
