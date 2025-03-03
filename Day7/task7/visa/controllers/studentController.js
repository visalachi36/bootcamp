const Student = require("../models/Student");

// Get all students with pagination
const getAllStudents = async (req, res) => {
  try {
    let { page, limit } = req.query;

    // Convert query params to numbers, with defaults
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;
    const skip = (page - 1) * limit;

    const totalStudents = await Student.countDocuments();
    const students = await Student.find().skip(skip).limit(limit);

    res.json({
      success: true,
      totalStudents,
      totalPages: Math.ceil(totalStudents / limit),
      currentPage: page,
      pageSize: limit,
      data: students,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { getAllStudents };
