const mongoose = require("mongoose");
const Student = require("../models/Student");

const deleteStudent = async (req, res) => {
  try {
    // Trim whitespace & newline characters
    const id = req.params.id.trim(); 

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Student ID format" });
    }

    // Find and delete student
    const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting student", error });
  }
};

module.exports = { deleteStudent };
