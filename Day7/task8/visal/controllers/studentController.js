const Student = require('../models/Student');

// Search students by Roll No or Student ID (case-insensitive)
const searchStudent = async (req, res) => {
    try {
        const query = req.query.q;
        if (!query) {
            return res.status(400).json({ message: "Search query is required" });
        }

        // Case-insensitive search using regex
        const students = await Student.find({
            $or: [
                { rollNo: { $regex: new RegExp(query, "i") } },
                { studentId: { $regex: new RegExp(query, "i") } }
            ]
        });

        if (students.length === 0) {
            return res.json({ message: "No students found" });
        }

        res.json(students);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// ✅ Ensure `searchStudent` is included in module.exports
module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
    searchStudent // ✅ Ensure this is correctly exported
};
