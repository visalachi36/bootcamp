const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    rollNo: { type: String, required: true, unique: true, minlength: 10, maxlength: 10 },
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    email: { type: String, required: true, unique: true, match: /^\S+@\S+\.\S+$/ },
    age: { type: Number, required: true, min: 18, max: 100 }
});

module.exports = mongoose.model("Student", StudentSchema);
