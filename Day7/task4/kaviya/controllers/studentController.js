const Student = require('../models/Student');

exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, rollNo, studentId, email, department } = req.body;

    // Check if rollNo or studentId already exists for another student
    const existingStudent = await Student.findOne({
      $or: [{ rollNo }, { studentId }],
      _id: { $ne: id } // Exclude the current student being updated
    });

    if (existingStudent) {
      return res.status(400).json({ message: "Roll No or Student ID already exists" });
    }

    // Update student data
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, rollNo, studentId, email, department },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student updated successfully", updatedStudent });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
