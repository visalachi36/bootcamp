const Student = require("../models/Student"); // Ensure this path is correct

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};
