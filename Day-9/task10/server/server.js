import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample Student Data (Mock API)
let students = [
    { id: 1, name: "Kaviya Jagadesh", major: "Computer Science", year: "2026" },
    { id: 2, name: "Niranjan", major: "IT", year: "2024" },
    { id: 3, name: "John Regina", major: "Love Failure", year: "2022" },
    { id: 4, name: "MS Dhoni", major: "Cricket", year: "2021" },
    { id: 5, name: "Pushpa Raj", major: "Smuggler", year: "2028" },
    { id: 6, name: "Virat", major: "Advertisement", year: "2022" }
];

// Endpoint to get students
app.get("/students", (req, res) => {
    res.json(students);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
